import logo from "@/assets/logo.png";

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">
          Resultados que <span className="text-gradient-neon">Falam por Si</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-12">
          Um método testado e aprovado por quem já estava cansado de promessas e decidiu agir.
        </p>

        {/* Logo with neon aura */}
        <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mx-auto">
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl animate-glow-pulse" />
          <div className="absolute inset-2 rounded-2xl neon-border bg-card flex items-center justify-center p-8">
            <img src={logo} alt="Zero a Gain - Day Trading" className="w-full h-full object-contain" />
          </div>
          {/* Outer border */}
          <div className="absolute -inset-3 rounded-2xl border border-primary/20 animate-pulse-neon" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { number: "500+", label: "Alunos Transformados" },
            { number: "97%", label: "Taxa de Satisfação" },
            { number: "24h", label: "Suporte Dedicado" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-6">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
              <p className="font-body text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 neon-line" />
    </section>
  );
};

export default AuthoritySection;
