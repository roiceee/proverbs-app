import { Helmet } from "react-helmet";
import SearchBar from "../components/application/search-bar";
import { Outlet } from "react-router";



function Application() {
  return (
    <>
      <Helmet>
        <title>Proverbs App | Application</title>
      </Helmet>
      <div className="mt-24 px-2 max-w-5xl container mx-auto">
        <section>
          <SearchBar />
        </section>

       <Outlet/>
       
        
      </div>
    </>
  );
}

export default Application;
