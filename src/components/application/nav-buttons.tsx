import { useCallback } from "react";
import { Link } from "react-router-dom";

interface NavButtonsProps {
  id: string;
  disableNext?: boolean;
  disablePrev?: boolean;
}

function NavButtons({ id, disableNext, disablePrev }: NavButtonsProps) {
  const handleClick = useCallback(
    (
      buttonType: "next" | "prev",
      event: React.MouseEvent<HTMLAnchorElement>
    ) => {
      switch (buttonType) {
        case "next":
          if (disableNext) {
            event.preventDefault();
          }
          break;
        case "prev":
          if (disablePrev) {
            event.preventDefault();
          }
          break;
      }
    },
    [disableNext, disablePrev]
  );

  return (
    <div className="flex flex-wrap-reverse gap-3 justify-between mt-4">
      <Link to={"/app"}>
        <button className="btn btn-outline btn-neutral">Menu</button>
      </Link>
      <div className="flex flex-row flex-wrap gap-3">
        <Link
          to={"/app/chapter/" + (parseInt(id) - 1).toString()}
          onClick={(e) => handleClick("prev", e)}
        >
          <button
            className="btn btn-outline btn-primary"
            disabled={disablePrev}
          >
            Previous
          </button>
        </Link>

        <Link
          to={"/app/chapter/" + (parseInt(id) + 1).toString()}
          onClick={(e) => handleClick("next", e)}
        >
          <button
            className="btn btn-outline btn-primary"
            disabled={disableNext}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavButtons;
