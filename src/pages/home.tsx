import { Link } from "react-router-dom";
import Quotes from "../components/quotes";

function Home() {
  return (
    <main className="h-screen flex justify-center items-center px-2">
      <section className="prose text-center prose-lg md:prose-xl">
        <h1>Proverbs</h1>
        <div style={{ height: "200px" }}>
          <Quotes />
        </div>
        <Link to={"/app"}>
          <button className="not-prose btn btn-wide btn-primary text-lg">
            Explore App
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Home;
