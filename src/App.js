import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Home from './Screens/Home.jsx';
import Signup from './Screens/Signup.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <Router>
      <div style={styling.main}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
const styling ={
  main : {
    width : '100vw',
    minHeight : '100vh'
  }
}
export default App;
