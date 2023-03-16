const Edit = () => {
  return (
    <section id="edit-page" className="auth">
      <form id="edit">
        <div className="container">
          <h1>Edit Game</h1>
          <label HtmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" value="" />

          <label HtmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value="" />

          <label HtmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min="1" value="" />

          <label HtmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" value="" />

          <label HtmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
};

export default Edit;
