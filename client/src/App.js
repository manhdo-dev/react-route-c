import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import RouteURL from "./routes/RouteURL";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <RouteURL />
      </Router>
      <Footer />
    </>
  );
}

export default App;
