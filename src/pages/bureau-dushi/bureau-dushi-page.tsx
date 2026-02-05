import { Helmet } from "react-helmet-async";
import Footer from "@/components/footer";

export default function BureauDushiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Бюро души — сервис психологической помощи | Оксана Бакулина</title>
        <meta name="description" content="Кейс Бюро души: сервис психологической помощи. Продуктовый дизайн." />
      </Helmet>
      <div className="p-10">
        <h1 className="text-2xl font-semibold">Bureau Dushi</h1>
        <p className="text-muted-foreground mt-2">Coming soon...</p>
      </div>
      <Footer />
    </div>
  );
}
