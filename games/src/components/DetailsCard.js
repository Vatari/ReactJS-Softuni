const DetailsCard = (game) => {
  return (
    <div className="info-section">
      <div className="game-header">
        <img className="game-img" src={game.imageUrl} alt="game" />
        <h1>{game.title}</h1>
        <span className="levels">MaxLevel: 4</span>
        <p className="type">Genre: {game.genre}</p>
      </div>

      <p className="text">{game.summary}</p>

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          <li className="comment">
            <p>Content: I rate this one quite highly.</p>
          </li>
          <li className="comment">
            <p>Content: The best game.</p>
          </li>
        </ul>
        <p className="no-comment">No comments.</p>
      </div>

      <div className="buttons">
        <a href="#" className="button">
          Edit
        </a>
        <a href="#" className="button">
          Delete
        </a>
      </div>
    </div>
  );
};

export default DetailsCard;
