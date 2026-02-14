import CTAButton from "./CTAButton";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <p className="text-primary font-body font-semibold text-sm md:text-base uppercase tracking-[0.3em] mb-6">
          Método exclusivo de resultados reais
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] mb-6">
          Pare de Sonhar.
          <br />
          <span className="text-gradient-neon neon-text-shadow">Comece a Lucrar.</span>
        </h1>

        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          O método direto que vai te tirar do zero e te colocar no caminho dos resultados reais.
          Sem enrolação. Sem promessas vazias. Apenas o que funciona.
        </p>

        <CTAButton size="large">
          Quero Começar Agora →
        </CTAButton>

        <p className="text-muted-foreground text-sm mt-6 font-body">
          ⚡ Acesso imediato após a confirmação do pagamento
        </p>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 neon-line" />
    </section>
  );
};

export default HeroSection;
