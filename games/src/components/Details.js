import DetailsCard from "./DetailsCard";

const Details = ({ games }) => {
  return (
    <section id="game-details">
      <h1>Game Details</h1>
      {games.map((g) => (
        <DetailsCard key={g._id} {...g} />
      ))}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};

export default Details;
