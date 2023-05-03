import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Home/Registration/Registration";
import Login from "../pages/Home/Login/Login";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ChefLayout from "../layouts/Cheflayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chef')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
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
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }

])

export default router;