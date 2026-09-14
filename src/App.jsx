import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}
