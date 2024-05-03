import s from "./App.module.css";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className={s.App}>
      <header>
        <h1>Book Library app</h1>
      </header>
      <main className={s.main}>
        <div className={s.left}>
          <BookForm />
        </div>
        <div className={s.rite}>
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
