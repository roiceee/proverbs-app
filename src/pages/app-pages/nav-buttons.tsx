import { Link } from "react-router-dom";

interface NavButtonsProps {
  id: string;
}

function NavButtons({ id }: NavButtonsProps) {
  return (
    <div className="flex flex-wrap-reverse gap-3 justify-between mt-4">
      <Link to={"/app"}>
        <button className="btn btn-outline btn-neutral">Menu</button>
      </Link>
      <div className="flex flex-row flex-wrap gap-3">
        {parseInt(id) !== 1 && (
          <Link to={"/app/" + (parseInt(id) - 1).toString()}>
            <button className="btn btn-outline btn-primary">Previous</button>
          </Link>
        )}

        {parseInt(id) !== 31 && (
          <Link to={"/app/" + (parseInt(id) + 1).toString()}>
            <button className="btn btn-outline btn-primary">Next</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavButtons;
