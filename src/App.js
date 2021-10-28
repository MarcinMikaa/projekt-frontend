import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ShoeDetailPage from "./pages/ShoeDetailPage/ShoeDetailPage";
import AddPage from "./pages/AddPage/AddPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/add" component={AddPage} />
          <Route path="/favorites" component={FavoritePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/shoe/:id" exact component={ShoeDetailPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
