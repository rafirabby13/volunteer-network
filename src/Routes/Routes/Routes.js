import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main.js";
import Home from "../../Pages/Home/Home.js";
import Register from "../../Pages/Register/Register.js";
import Login from "../../Pages/LOgin/Login.js";
import Checkout from "../../Pages/Checkout/Checkout.js";
import Events from "../../Pages/Events/Events.js";
import LoginWithEmailPass from "../../Pages/LOgin/LoginWithEmailPass.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import AddEvents from "../../Pages/AddEvent/AddEvents.js";
import AddEventForm from "../../Pages/AddEventForm/AddEventForm.js";
import UserList from "../../Pages/UserList/UserList.js";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/volunteer/${params.id}`)
            },

            {
                path:'/events',
                element:<PrivateRoute><Events></Events></PrivateRoute>
            }
            
        ]
    },
    {
        path:'register',
        element:<Register></Register>
    },
    {
        path:'login',
        element:<LoginWithEmailPass></LoginWithEmailPass>
    },
    {
        path:'addEvent',
        element:<AddEvents></AddEvents>,
        children:[
            {
                path:'addEventForm',
                element:<AddEventForm></AddEventForm>
                
            },
            {
                path:'userList',
                element:<UserList></UserList>
                
            }
        ]
    }
])