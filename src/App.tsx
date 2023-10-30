import Body from "./pages/Body";
import Home from "./pages/Home";

function App() {
  return (
    <main className="h-screen relative [perspective:105px] overflow-x-hidden ">
      <Home />
      <Body />
    </main>
  );
}

export default App;
