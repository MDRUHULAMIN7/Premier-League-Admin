import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";

import { Setting } from "../pages/Dashboard/Setting/Setting";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Predictions from "../pages/Dashboard/Predictions/Predictions";
import PredectionDetails from "../pages/Dashboard/Predictions/PredectionDetails";
import UserManagement from "../pages/Dashboard/UserManagement/UserManagement";
import UserDetails from "../pages/Dashboard/UserManagement/UserDetails";
import TicketManagement from "../pages/Dashboard/TicketManagement/TicketManagement";
import Transaction from "../pages/Dashboard/Transaction/Transaction";
import Settings from "../pages/Dashboard/Settings/Settings";
import JackpotTracker from "../pages/Dashboard/JackpotTracker/JackpotTracker";
import AdminProfile from "../pages/Dashboard/AdminProfile";
import Notifications from "../pages/Dashboard/Notifications";
import Error from "../Components/Shared/Error";






const router = createBrowserRouter([
      
  {
    path:"/",
    element:<App></App>,
    errorElement:<div> <Error/> </div>  ,
    children:[
      {
        path:"",
        element:<div><Dashboard/></div>
      },
      {
        path:"/setting",
        element:<div><Setting/></div>
      },
      {
        path:"/predictions",
        element:<div><Predictions/></div>
      },
      {
        path:"/prediction-details/:id",
        element:<div><PredectionDetails/></div>
      },
      {
        path:"/user-management",
        element:<div><UserManagement/></div>
      },
      {
        path:"/user-details/:id",
        element:<div><UserDetails/></div>
      },
      {
        path:"/ticket-management",
        element:<div><TicketManagement></TicketManagement></div>
      },
      {
        path:"/transaction",
        element:<div><Transaction/></div>
      },
      {
        path:"/settings",
        element:<div><Settings/></div>
      },
      {
        path:"/jackpot-tracker",
        element:<div><JackpotTracker/></div>
      },
      {
        path:"/admin-profile",
        element:<div><AdminProfile/></div>
      },
      {
        path:"/notifications",
        element:<div><Notifications/></div>
      }
    ]
  }

]);

export default router;