const CatalogueCard = (game) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={game.imageUrl} />
        <h6>Genre: {game.genre}</h6>
        <h2>{game.title}</h2>
        <a href="#" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
};

export default CatalogueCard;
