import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [username, setUserName] = useState("");
  const client = new QueryClient();
  return (
    <>
      <div className="App">
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homes />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
