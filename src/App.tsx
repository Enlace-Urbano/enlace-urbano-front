import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import {Workers, AdminHome, LayoutAdmin, AdminProjects, Statistics } from './admin/pages/Index'
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
        <Route path="/canaletico" element={<Denounce />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
      <Route element={<LayoutAdmin />} >
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/workers" element={<Workers />} />
      <Route path="/admin/stadistics" element={<Statistics />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      </Route >
    </Routes>
  );
}

export default App;
