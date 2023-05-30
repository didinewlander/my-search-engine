import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </Router>
  );
}

export default App;
