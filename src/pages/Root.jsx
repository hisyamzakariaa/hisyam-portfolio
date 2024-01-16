import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <header className={classes.nav}>
        <MainNavigation />
      </header>
      <main className={classes.container}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
