import "./App.css";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Book Library app</h1>
      </header>
      <main>
        <div>
          <BookForm />
        </div>
        <div>
          <BookList />
          <Filter />
        </div>
      </main>
    </div>
  );
}

export default App;
