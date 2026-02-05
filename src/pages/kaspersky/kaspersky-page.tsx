import { Helmet } from "react-helmet-async";
import Footer from "@/components/footer";

export default function KasperskyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Kaspersky Mobile Security | Оксана Бакулина</title>
        <meta name="description" content="Кейс Mobile Security by Kaspersky. Дипломная работа по продуктовому дизайну." />
      </Helmet>
      <div className="p-10">
        <h1 className="text-2xl font-semibold">Kaspersky</h1>
        <p className="text-muted-foreground mt-2">Coming soon...</p>
      </div>
      <Footer />
    </div>
  );
}
