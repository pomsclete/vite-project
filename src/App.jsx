import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/index"
import Erreur from "./pages/erreur/index"
import Header from "./components/header/index"
import Apropos from "./pages/apropos/index"
import Footer from "./components/footer/index"


function App () {

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>

  );

}



export default App;