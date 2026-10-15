import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About page</h1>
    </>
  );
}

export default App;
