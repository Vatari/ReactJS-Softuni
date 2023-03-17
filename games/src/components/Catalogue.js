import CatalogueCard from "./CatalogueCard";

const Catalogue = ({ games }) => {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.map((g) => (
        <CatalogueCard key={g._id} {...g} />
      ))}

      <h3 className="no-articles">No articles yet</h3>
    </section>
  );
};

export default Catalogue;
