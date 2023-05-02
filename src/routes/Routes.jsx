import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Home/Registration/Registration";
import Login from "../pages/Home/Login/Login";

const router =  createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path: '/',
            element:<Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path: '/register',
            element:<Registration></Registration>
          }
        ]
    }
])

export default router;