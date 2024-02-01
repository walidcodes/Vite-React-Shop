import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home.tsx";
import { About } from "./pages/about.tsx";
import { Store } from "./pages/store.tsx";
import { Navbar } from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
