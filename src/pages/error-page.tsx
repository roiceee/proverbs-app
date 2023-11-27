import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="prose text-center">
        <h1>Page not found!</h1>
        <Link to={"/"}>
          <button className="btn btn-accent">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
