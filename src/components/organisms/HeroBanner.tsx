import { Apple } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HeroBanner = () => {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg">
      <div className="grid md:grid-cols-2 h-[300px]">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
            alt="Bowl de salada saudável"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center bg-primary p-8 text-center">
          <Apple className="h-16 w-16 text-primary-foreground mb-4" />
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">
            Quero Bem-Estar
          </h2>
          <p className="text-primary-foreground/90 text-lg">
            Transforme sua alimentação, transforme sua vida
          </p>
        </div>
      </div>
    </Card>
  );
};
