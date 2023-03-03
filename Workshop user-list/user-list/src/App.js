import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <Table />
          <button class="btn-add btn">Add new user</button>
          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
