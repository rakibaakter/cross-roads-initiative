import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
