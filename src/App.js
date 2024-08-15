import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import ViewLogin from "./views/auth/Login";
import Dash from "./views/app";
import "./App.css";

import OrginTracker from "./views/app/orgintracker";
import DNSLookup from "./views/app/dnslookup";
import EmailTracker from "./views/app/emailtracker";
import CCTVSurvilance from "./views/app/cctv";
import PortScan from "./views/app/portscan";
import Info from "./views/app/cctv/info";
import Setting from "./views/app/setting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="app" />} />
        <Route path="app" element={<Dash />} />
        <Route path="login" element={<ViewLogin />} />
        <Route path="orgintracker" element={<OrginTracker />} />
        <Route path="dnslookup" element={<DNSLookup />} />
        <Route path="emailtracker" element={<EmailTracker />} />
        <Route path="cctv" element={<CCTVSurvilance />} />
        <Route path="portscan" element={<PortScan />} />
        <Route path="cctv/:id" element={<Info />} />
        <Route path="setting" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
