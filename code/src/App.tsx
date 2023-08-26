import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <main className="grid place-items-center min-h-screen bg-neutral-darkBlue-900 text-neutral-white">
        <Routes>
          <Route path="/" Component={Card} />
          <Route path="/success" Component={Success} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
