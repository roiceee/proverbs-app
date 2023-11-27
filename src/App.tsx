import { Helmet } from "react-helmet";
import Navbar from "./components/nav/navbar.tsx";

import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Home from "./pages/home.tsx";
import { Route, Routes } from "react-router";
import Application from "./pages/app.tsx";
import ErrorPage from "./pages/error-page.tsx";
import Footer from "./components/footer.tsx";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Proverbs App | Home</title>
      </Helmet>

      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Application />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer/>
    </main>
  );
}

export default App;
