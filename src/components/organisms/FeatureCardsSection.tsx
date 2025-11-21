import { Trophy, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const FeatureCardsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-foreground">O que oferecemos:</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1: Competições */}
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="space-y-4 pb-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
              <Trophy className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Competição de refeições</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Desafios saudáveis com ranking entre amigos para ver quem se alimenta melhor.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              onClick={() => navigate("/competicoes")}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Ver mais
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2: Feed de Receitas */}
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="space-y-4 pb-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Feed de Receitas</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Espaço para compartilhar, explorar e salvar receitas da comunidade.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              onClick={() => navigate("/receitas")}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Ver mais
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
