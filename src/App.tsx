import { Navbar } from "./assets/components/common/Navbar";
import { Footer } from "./assets/components/common/Footer";
import Home from "./pages/Home";
import CanvasNetwork from "./assets/components/common/CanvasNetwork";
function App() {
  return (
    <>
      <Navbar />
      <CanvasNetwork />
      {/* Các trang khác */}
      <Home /> 
      <Footer />
    </>
  );
}

export default App;
