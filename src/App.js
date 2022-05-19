import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./Authentication/PrivateRoute";
import About from "./pages/About";
import { privateRoutes } from "./routes/privateRoutes";

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
          <Route element={<PrivateRoute />}>
            {
              privateRoutes.map(({ path, Component }, index) =>
                <Route key={index} path={path} element={<Component />} />)
            }
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
