import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "@/pages/home/home-page";
import StempsPage from "@/pages/stemps/stemps-page";
import KasperskyPage from "@/pages/kaspersky/kaspersky-page";
import BureauDushiPage from "@/pages/bureau-dushi/bureau-dushi-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stemps/*" element={<StempsPage />} />
        <Route path="/kaspersky/*" element={<KasperskyPage />} />
        <Route path="/bureau-dushi/*" element={<BureauDushiPage />} />
      </Routes>
    </BrowserRouter>
  );
}
