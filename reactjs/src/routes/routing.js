import  {BrowserRouter as Router , Routes, Route} from "react-router-dom";

import AdminLogin from "../screens/auth/AdminLogin"; 

import Private from "./Private";
import Products from "../screens/auth/dashbord/Products";
import Public from "./Public";
const Routing = ()=>
{
    return (

        <Router>
            <Routes>
            <Route path="dashboard">
                    <Route path="Products" element={<Private> <Products /> </Private>} />
                </Route>
                <Route path="auth">
                    <Route path="admin-login" element={<Public> <AdminLogin />  </Public> } />
                </Route>
               

            </Routes>
        </Router>
    );
}
export default Routing;