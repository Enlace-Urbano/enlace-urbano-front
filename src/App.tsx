import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import AdminMain from './pages/admin-mainmenu/AdminMain'
import Workers from './pages/admin-workersedit/Workers'
import { Home, About, Projects, Everyday, Services, Contact, Layout, Denounce } from './pages/index'


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

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/main" element={<AdminMain />} />
      <Route path="/admin/workers" element={<Workers />} />
    </Routes>
  );
}

export default App;
