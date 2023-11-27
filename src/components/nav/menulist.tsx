import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


function MenuList() {

  const [activePath, setActivePath] = useState<string>("");

  const isActivePath = (str: string) => {
    return str === activePath;
  }

  const location = useLocation();



  useEffect(() => {
    setActivePath(location.pathname);
  }, [location])

  return (
    <>
      <li className={isActivePath("/") ? "text-accent": ""}>
        <Link to={"/"}>Home</Link>
      </li>
      <li className={isActivePath("/app") ? "text-accent": ""}>
        <Link to={"/app"}>App</Link>
      </li>
    </>
  );
}

export default MenuList;
