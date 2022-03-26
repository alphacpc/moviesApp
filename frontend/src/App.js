import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
