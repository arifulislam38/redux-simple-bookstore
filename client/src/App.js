import { Provider } from "react-redux";
import "./App.css";
import BookSiteContainer from "./components/BookSiteContainer/BookSiteContainer";
import "./components/styles/style.css";
import { store } from './Redux/store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BookSiteContainer />
      </Provider>
    </div>
  );
}

export default App;
