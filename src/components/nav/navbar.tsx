import MenuList from "./menulist";
import ThemeList from "./themelist";

function Navbar() {
  return (
    <div className="navbar absolute top-0 bg-base-100 px-3 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <MenuList />
          </ul>
        </div>

        <img src={"/logo.png"} width={30} />
        <span className="text-2xl ml-4 font-semibold text-accent">
          Proverbs
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuList />
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeList />
      </div>
    </div>
  );
}

export default Navbar;
