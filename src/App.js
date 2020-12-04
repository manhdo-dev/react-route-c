import "../src/css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../src/component/Nav/Nav";
import Header from "../src/component/Header/Header";
import Footer from "../src/component/Footer/Footer";
import RouteURL from "../src/routes/RouteURL";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Header />
        <RouteURL />
      </Router>
      <Footer />
    </>
  );
}

export default App;
