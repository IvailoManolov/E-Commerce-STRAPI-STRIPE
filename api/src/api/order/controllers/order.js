

'use strict';

// @ts-ignore
const stripe = require('stripe')('sk_test_51NgtvHBJruDG0mwhGtJdfErEML2DZEfyBW4Hpc6KCM2MgWh5HwSbE5DqlbeUHF9X4bqNTIzUrsXXz1UU2kCAeObW00QV0CZZZW', {
    apiVersion: '2023-08-16'
});

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(data) {
        const { products } = data.request.body;

        console.log('products');

        const lineItems = await Promise.all(
            products.map(async (product) => {
                const item = await strapi.service('api::product.product').findOne(product.id);

                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.title,
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: product.quantity,
                };
            })
        )
        console.log(lineItems);
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                shipping_address_collection: {
                    allowed_countries: [
                        'US',
                        'CA'
                    ]
                },
                payment_method_types: ['card'],
                mode: 'payment',
                success_url: `http://localhost:5566?success=true`,
                cancel_url: `http://localhost:5566?canceled=true`,
            });


            await strapi.service('api::order.order').create({
                data: {
                    products,
                    stripeId: session.id,
                }
            });

            return { stripeSession: session }

        } catch (err) {
            console.log(err);
            data.response.status = 500;
            return err;
        }
    }
}));
