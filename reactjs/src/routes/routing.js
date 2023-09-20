import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "../screens/auth/AdminLogin";
import Private from "./Private";
import Products from "../screens/auth/dashbord/Products";
import Public from "./Public";
import Categories from "../screens/auth/dashbord/Categories";
import CreateCategory from "../screens/auth/dashbord/CreateCategory";
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="">
          <Route
            path="admin-login"
            element={
              <Public>
                {" "}
                <AdminLogin />{" "}
              </Public>
            }
          />
        </Route>

        <Route path="dashboard">
          <Route
            path="Products"
            element={
              <Private>
                {" "}
                <Products />{" "}
              </Private>
            }
          />

          <Route
            path="categories/:page"
            element={
              <Private>
                <Categories />
              </Private>
            }
          ></Route>
          <Route
            path="categories"
            element={
              <Private>
                {" "}
                <Categories />{" "}
              </Private>
            }
          ></Route>

          <Route
            path="create-category"
            element={
              <Private>
                <CreateCategory />
              </Private>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default Routing;
