import { Link } from "react-router-dom";

function NotFoundDiv() {
  return (
    <div className="prose text-center">
      <h1>Page not found!</h1>
      <Link to={"/"}>
        <button className="btn btn-accent">Go to Home</button>
      </Link>
    </div>
  );
}

export default NotFoundDiv;
