import { Link, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Navbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer> our footer</footer>
    </>
  );
};
export default SharedLayout;
