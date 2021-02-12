import './App.css';
import Products from "./components/Products";
import NavbarPage from "./components/NavbarTop";
import Footer from "./components/FooterBottom"
import Pane from "./components/ClassesPane"
function App() {
  return (
    <div className="App">
      <NavbarPage></NavbarPage>
      <Products></Products>
      <Pane></Pane>
      <Pane></Pane>
      <Pane></Pane>
      <Pane></Pane>
      <Pane></Pane>
      <Footer></Footer>
    </div>
  );
}

export default App;
