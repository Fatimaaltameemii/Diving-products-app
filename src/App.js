import logo from "./diving-logo.jpg";
import "./styles.css";
function App() {
  return (
    <body className="background">
      <div>
        <div style={{ float: "left" }}>
          <img className="photo" alt="D-logo" src={logo} />
        </div>
        <h1 style={{ textAlign: "center" }}>Diving Products</h1>
        <h4 style={{ textAlign: "center" }}>
          Where never an end for the sea 🤿
        </h4>
      </div>
    </body>
  );
}

export default App;
