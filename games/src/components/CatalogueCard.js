import { Link } from "react-router-dom";

const CatalogueCard = (game) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={game.imageUrl} alt="game" />
        <h6>Genre: {game.genre}</h6>
        <h2>{game.title}</h2>
        <Link to={`/catalogue/${game._id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CatalogueCard;
