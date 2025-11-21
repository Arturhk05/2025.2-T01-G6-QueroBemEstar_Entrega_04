import { MainLayout } from "@/components/templates/MainLayout";
import { HeroBanner } from "@/components/organisms/HeroBanner";
import { FeatureCardsSection } from "@/components/organisms/FeatureCardsSection";

const Home = () => {
  return (
    <MainLayout>
      <div className="space-y-12">
        <HeroBanner />
        <FeatureCardsSection />
      </div>
    </MainLayout>
  );
};

export default Home;
