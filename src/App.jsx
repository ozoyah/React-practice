import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./pages/login";

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <QueryClientProvider client={client}>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Homes />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
