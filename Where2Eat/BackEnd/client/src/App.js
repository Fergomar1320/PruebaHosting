
import './App.css';
import React from "react";
import Restaurant from "./Restaurant.js";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch ("/api/home")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Restaurant />
      </header>
    </div>
  );
}

export default App;
