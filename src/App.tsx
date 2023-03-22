<<<<<<< HEAD
import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import {
  Home,
  About,
  Projects,
  Everyday,
  Services,
  Contact,
} from "./pages/index";
import Layout from "./components/Layout";
=======
import './App.css'
import { Routes, Route } from 'react-router'
import Login from './pages/login/Login'
import { Home, About, Projects, Everyday, Services, Contact } from './pages/index'
import Layout from './pages/layout/Layout'
>>>>>>> 11a28b171f22069b7f720b02c43a27ed4f3bb922

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route element={<Layout />}>
=======
      <Route element={<Layout />} >
>>>>>>> 11a28b171f22069b7f720b02c43a27ed4f3bb922
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/nuestrodia" element={<Everyday />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contactanos" element={<Contact />} />
      </Route>
<<<<<<< HEAD
=======

>>>>>>> 11a28b171f22069b7f720b02c43a27ed4f3bb922
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  );
}

export default App;
