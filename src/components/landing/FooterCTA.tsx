import CTAButton from "./CTAButton";

const FooterCTA = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6">
          <span className="text-gradient-neon neon-text-shadow">Liberdade</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mx-auto mb-10">
          A decisão que vai mudar sua vida está a um clique de distância.
          Não deixe para amanhã o que pode transformar seu futuro hoje.
        </p>

        <CTAButton size="large">
          Quero Minha Liberdade Agora →
        </CTAButton>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border pt-8">
        <p className="text-center text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} — Todos os direitos reservados. Este produto é comercializado com apoio da Hotmart.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
