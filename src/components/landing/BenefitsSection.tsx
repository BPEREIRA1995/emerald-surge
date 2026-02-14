import { TrendingUp, Globe, Lightbulb, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Escale seus Ganhos",
    desc: "Aprenda a criar fontes de renda que crescem exponencialmente sem depender do seu tempo.",
  },
  {
    icon: Globe,
    title: "Liberdade Geográfica",
    desc: "Trabalhe de onde quiser com um modelo de negócio 100% digital e escalável.",
  },
  {
    icon: Lightbulb,
    title: "Mentalidade Vencedora",
    desc: "Desenvolva o mindset correto que separa quem sonha de quem realmente conquista.",
  },
  {
    icon: DollarSign,
    title: "Resultados Reais",
    desc: "Estratégias práticas focadas em gerar dinheiro de verdade, não teoria.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-4">
          O que Você Vai <span className="text-gradient-neon">Dominar</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg text-center max-w-xl mx-auto mb-16">
          Habilidades que vão transformar completamente sua realidade financeira.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card rounded-xl p-6 text-center group hover:neon-border transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase mb-2">{title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 neon-line" />
    </section>
  );
};

export default BenefitsSection;
