import { MainLayout } from "@/components/templates/MainLayout";

const Competicoes = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Competições</h1>
          <p className="text-xl text-muted-foreground">Em breve!</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Competicoes;
