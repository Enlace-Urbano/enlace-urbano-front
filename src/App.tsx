import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import {Workers, AdminHome, LayoutAdmin, AdminProjects, Stadistics} from './admin/pages/index'
import { Home, About, Projects, Everyday, Services, Contact, Layout, Denounce } from './pages/Index'


function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/nuestrodia" element={<Everyday />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/denuncia" element={<Denounce />} />
      </Route>
      <Route element={<LayoutAdmin />} >
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/workers" element={<Workers />} />
      <Route path="/admin/stadistics" element={<Stadistics />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      </Route >
    </Routes>
  );
}

export default App;
