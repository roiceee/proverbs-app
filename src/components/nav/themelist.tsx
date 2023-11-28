import { useEffect, useState } from "react";
import _ from "lodash";

function ThemeList() {
  const [activeTheme, setActiveTheme] = useState<string>("Theme");

  const changeTheme = (str: string) => {
    setActiveTheme(_.capitalize(str));
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      changeTheme("light")
      document.documentElement.setAttribute("data-theme", "light");
      return;
    }
    changeTheme(theme);
  }, []);

  return (

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost mx-4 border-secondary">{activeTheme}</div>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box border">
        <li>
          <button
            data-set-theme="light"
            data-act-class="ACTIVECLASS"
            onClick={() => changeTheme("light")}
          >
            Light
          </button>
        </li>
        <li>
          <button
            data-set-theme="retro"
            data-act-class="ACTIVECLASS"
            onClick={() => changeTheme("retro")}
          >
            Retro
          </button>
        </li>
        <li>
          <button
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            onClick={() => changeTheme("dark")}
          >
            Dark
          </button>
        </li>
        <li>
          <button
            data-set-theme="night"
            data-act-class="ACTIVECLASS"
            onClick={() => changeTheme("night")}
          >
            Night
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ThemeList;
