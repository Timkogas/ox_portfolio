import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/home/home-page"));
const StempsPage = lazy(() => import("@/pages/stemps/stemps-page"));
const KasperskyPage = lazy(() => import("@/pages/kaspersky/kaspersky-page"));
const BureauDushiPage = lazy(() => import("@/pages/bureau-dushi/bureau-dushi-page"));
const DrugoePage = lazy(() => import("@/pages/drugoe/drugoe-page"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stemps/*" element={<StempsPage />} />
          <Route path="/kaspersky/*" element={<KasperskyPage />} />
          <Route path="/bureau-dushi/*" element={<BureauDushiPage />} />
          <Route path="/drugoe/*" element={<DrugoePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
