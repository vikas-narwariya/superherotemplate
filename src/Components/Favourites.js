import NavBar from "./NavBar"
import { useSelector } from "react-redux";
import MovieResults from "./MovieResults";


const Favourites = () => {
    const data = useSelector((state) => state);

    return (
        <div>
          <NavBar/>
          <div>
      <p
        style={{
          fontSize: "300%",
          textShadow: "2px 3px grey",
        }}
      >
        Fav Heroes List
      </p>
      {data ? (
        <MovieResults superHeroData={data} />
      ) : (
        <h2>Please Add Some SuperHeroes</h2>
      )}
    </div>
        </div>
    )
}

export default Favourites;
