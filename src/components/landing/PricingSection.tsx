import CTAButton from "./CTAButton";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-4">
          Oferta <span className="text-gradient-neon">Exclusiva</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg text-center max-w-xl mx-auto mb-12">
          Essa condição especial pode sair do ar a qualquer momento.
        </p>

        <div className="max-w-md mx-auto glass-card neon-border rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
          {/* Top glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-20 bg-primary/20 rounded-full blur-3xl" />

          <p className="text-primary font-body font-semibold text-sm uppercase tracking-wider mb-6 relative">
            Acesso Completo
          </p>

          <div className="mb-2 relative">
            <span className="text-muted-foreground font-body text-lg line-through">R$ 599,00</span>
          </div>

          <div className="mb-1 relative">
            <span className="font-heading text-6xl md:text-7xl font-bold text-primary neon-text-shadow">R$ 267,00

            </span>
          </div>
          <p className="text-muted-foreground font-body text-sm mb-8 relative">ou 12x de R$ 27,61

          </p>

          <div className="space-y-3 mb-8 text-left relative">
            {[
            "Acesso vitalício ao método completo",
            "Atualizações gratuitas",
            "Suporte exclusivo",
            "Garantia de 7 dias"].
            map((item) =>
            <div key={item} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-foreground text-sm">{item}</span>
              </div>
            )}
          </div>

          <CTAButton size="large" className="w-full text-center">
            GARANTIR A ESTRATÉGIA →
          </CTAButton>

          <p className="text-muted-foreground text-xs mt-4 font-body">
            🔒 Pagamento 100% seguro via Hotmart
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 neon-line" />
    </section>);

};

export default PricingSection;