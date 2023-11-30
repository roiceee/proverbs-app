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
import AppHome from "./pages/app-pages/app-home.tsx";
import ChapterPage from "./pages/app-pages/chapter-page.tsx";
import ScrollToTop from "./components/scroll-to-top.tsx";
import SearchPage from "./pages/app-pages/search-page.tsx";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <main>
      <ScrollToTop />
      <Helmet>
        <title>Proverbs App | Home</title>
      </Helmet>

      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Application />}>
          <Route path="" element={<AppHome />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="chapter" element={<ChapterPage />}>
            <Route path=":id" element={<ChapterPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
