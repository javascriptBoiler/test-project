
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavLinks from "../components/NavLinks";
import ThemeCustomization from "../theme";

const RootLayout = () => {
  return (
    <ThemeCustomization>
      <NavLinks />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </ThemeCustomization>
  );
};

export default RootLayout;
