import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router";
import { lazy, Suspense, useEffect } from "react";

const HomePage = lazy(() => import("@/pages/home/home-page"));
const StempsPage = lazy(() => import("@/pages/stemps/stemps-page"));
const StempsKKPage = lazy(() => import("@/pages/stemps/kk/stemps-kk-page"));
const KasperskyPage = lazy(() => import("@/pages/kaspersky/kaspersky-page"));
const BureauDushiPage = lazy(() => import("@/pages/bureau-dushi/bureau-dushi-page"));
const DrugoePage = lazy(() => import("@/pages/drugoe/drugoe-page"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stemps" element={<StempsPage />} />
          <Route path="/stemps/konstruktor-kursov" element={<StempsKKPage />} />
          <Route path="/stemps/kk" element={<Navigate to="/stemps/konstruktor-kursov" replace />} />
          <Route path="/kaspersky/*" element={<KasperskyPage />} />
          <Route path="/bureau-dushi/*" element={<BureauDushiPage />} />
          <Route path="/drugoe/*" element={<DrugoePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
