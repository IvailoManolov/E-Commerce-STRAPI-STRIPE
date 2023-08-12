import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/products/:id',
    element: <Products />
  },

  {
    path: '/product/:id',
    element: <Product />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;