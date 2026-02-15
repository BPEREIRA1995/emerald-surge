import { Zap, Clock, Target, ShieldCheck } from "lucide-react";

const ProductSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">A ESTRATÉGIA COMPLETA
            <span className="text-gradient-neon">Método Completo</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">Tudo o que você precisa saber em um único módulo. Direto ao ponto.

          </p>
        </div>

        {/* Main product card */}
        <div className="max-w-3xl mx-auto glass-card neon-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary neon-glow" />
            <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
              Entrega Imediata
            </span>
          </div>

          <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase mb-4">
            Módulo Único — Método Direto
          </h3>

          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8">
            Sem enrolação com semanas de conteúdo desnecessário. Você recebe o método completo 
            de uma vez, com passo a passo claro para começar a aplicar e ver resultados 
            o mais rápido possível.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
            { icon: Zap, text: "Acesso vitalício ao conteúdo" },
            { icon: Clock, text: "Comece a aplicar em minutos" },
            { icon: Target, text: "Estratégias testadas e validadas" },
            { icon: ShieldCheck, text: "Garantia de 7 dias" }].
            map(({ icon: Icon, text }) =>
            <div key={text} className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4">
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-foreground text-sm">{text}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 neon-line" />
    </section>);

};

export default ProductSection;