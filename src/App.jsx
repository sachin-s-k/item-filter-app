import { Provider } from "react-redux";
import "./App.css";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { store } from "./app-store/store";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <div className="ml-9">
          <SearchBar />
        </div>
        <ItemList />
        <div className="mt-10">
          <Info />
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
