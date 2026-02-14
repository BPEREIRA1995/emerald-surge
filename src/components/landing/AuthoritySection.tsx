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

        {/* Neon aura image placeholder */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
          <div className="absolute inset-2 rounded-full neon-border bg-card flex items-center justify-center">
            <div className="text-center">
              <p className="font-heading text-5xl md:text-6xl font-bold text-primary">$</p>
              <p className="font-body text-muted-foreground text-sm mt-2">Sua imagem aqui</p>
            </div>
          </div>
          {/* Outer ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/20 animate-pulse-neon" />
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
