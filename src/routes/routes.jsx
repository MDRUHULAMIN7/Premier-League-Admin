import { createBrowserRouter, Route } from "react-router-dom";
import App from "../App";

import { Setting } from "../pages/Dashboard/Setting/Setting";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Predictions from "../pages/Dashboard/Predictions/Predictions";
import PredectionDetails from "../pages/Dashboard/Predictions/PredectionDetails";
import UserManagement from "../pages/Dashboard/UserManagement/UserManagement";






const router = createBrowserRouter([
      
  {
    path:"/",
    element:<App></App>,
    errorElement:<div>Page Not Found</div>  ,
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
      }
    ]
  }

]);

export default router;