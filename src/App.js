import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddService from "./pages/Dashboard/AddService";
import AddAdmin from "./pages/Dashboard/AddAdmin";

function App() {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) =>
              <Route key={index} path={path} element={<Component />} />)
          }

          {/* =========================================================== */}
          <Route element={<PrivateRoute />}>
            {
              privateRoutes.map(({ path, Component }, index) =>
                <Route key={index} path={path} element={<Component />} />)
            }

          </Route>
          {/*============================================================= */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path='/dashboard/add-service' element={<AddService />} />
                <Route path='/dashboard/add-admin' element={<AddAdmin />} />
            </Route>
          </Route>

        </Routes>
      </Navbar>
    </>
  );
}

export default App;
