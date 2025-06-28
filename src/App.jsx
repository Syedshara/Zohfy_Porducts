import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Industries from "./pages/Industries"
import Process from "./pages/Process"
import Contact from "./pages/Contact"
import GuildHallFooter from "./components/GuildHallFooter"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Products />} />
        <Route path="/use-cases" element={<Industries />} />
        <Route path="/pricing" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GuildHallFooter />
    </div>
  )
}

export default App
