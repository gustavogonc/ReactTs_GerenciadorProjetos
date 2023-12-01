import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EAP from "../pages/EAP";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/eap" element={<EAP />} />
    </Routes>
  );
}
