import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import { Workers, AdminHome, LayoutAdmin, AdminProjects, Stadistics } from './admin/pages/Index'
import { Home, About, Projects, Everyday, Services, Contact, Layout, Denounce } from './pages/index'
import PrivateRoute from "./middleware/authMiddleware";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/nuestrodia" element={<Everyday />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/canaletico" element={<Denounce />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<PrivateRoute component={LayoutAdmin} />}>
        <Route path="" element={<AdminHome />} />
        <Route path="workers" element={<Workers />} />
        <Route path="stadistics" element={<Stadistics />} />
        <Route path="projects" element={<AdminProjects />} />
      </Route>
    </Routes>
  );
}

export default App;
