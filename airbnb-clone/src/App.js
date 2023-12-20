import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="app">
      <Router basename="/airbnb-clone">
        <Header />

        <Routes>
          {/* / */}
          <Route path="/" element={<Home />} />
          {/* /search */}
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>

      {/* Home */}
      {/* Header */}

      {/* Banner */}

      {/* Cards Section */}

      {/* Footer */}

      {/* SearchPage */}
      {/* Header */}
      {/* .... */}
    </div>
  );
}

export default App;
