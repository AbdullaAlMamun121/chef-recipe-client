import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Home/Registration/Registration";
import Login from "../pages/Home/Login/Login";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ChefLayout from "../layouts/Cheflayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-recipe-assignment-server-abdullaalmamun121.vercel.app/chef')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }

    ]
  },

  {
    path: 'chef',
    element: <ChefLayout></ChefLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-assignment-server-abdullaalmamun121.vercel.app/chef/${params.id}`)
      }
    ]
  }

])

export default router;