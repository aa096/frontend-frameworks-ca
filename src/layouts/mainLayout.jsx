import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div id="mainContainer" className="container mx-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
