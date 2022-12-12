import Navbar from "./components/Navbar";
import AllRoutes from "./components/routes//AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
      <AllRoutes />
      </div>
    </div>
  );
}

export default App;
