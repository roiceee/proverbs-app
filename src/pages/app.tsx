import { Helmet } from "react-helmet";

import { Outlet } from "react-router";



function Application() {
  return (
    <>
      <Helmet>
        <title>Proverbs App | Application</title>
      </Helmet>
      <div className="mt-24 px-2 max-w-5xl container mx-auto">
        

       <Outlet/>
       
        
      </div>
    </>
  );
}

export default Application;
