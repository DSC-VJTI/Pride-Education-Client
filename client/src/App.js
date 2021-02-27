import "./App.css";
// import NavbarPage from "./components/NavbarTop";
// import Footer from "./components/FooterBottom";
// import Pane from "./components/ClassesPane";
import CoursePage from "./components/CoursePage";

function App() {
  var Stream = {
    SCMPE: ["Abhishek Khilwani", "Abhishek Khilwani", "Abhishek Khilwani"],
    "FINANCIAL REPORTING": [
      "Abhishek Khilwani",
      "Abhishek Khilwani",
      "Abhishek Khilwani",
    ],
    SFM: ["Abhishek Khilwani", "Abhishek Khilwani", "Abhishek Khilwani"],
    LAW: ["Abhishek Khilwani", "Abhishek Khilwani", "Abhishek Khilwani"],
    AUDIT: ["Abhishek Khilwani", "Abhishek Khilwani", "Abhishek Khilwani"],
  };

  return (
    <div className="App">
      {/* <NavbarPage></NavbarPage>
      <Pane field={"SMPE"}></Pane>
      <Pane field={"SMPE"}></Pane>
      {Stream.map((item, index) => (
        <Pane field={item}></Pane>
      ))}
      <Footer></Footer> */}
       <CoursePage></CoursePage>
    </div>
  );
}

export default App;
