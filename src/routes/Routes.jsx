import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Home/Registration/Registration";
import Login from "../pages/Home/Login/Login";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ChefLayout from "../layouts/Cheflayout";

const router =  createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path: '/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/chef')
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
    },

    {
      path:'chef',
      element:<ChefLayout></ChefLayout>,
      children:[
        {
          path:':id',
          element:<ChefDetails></ChefDetails>,
          loader:({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    }
  
])

export default router;