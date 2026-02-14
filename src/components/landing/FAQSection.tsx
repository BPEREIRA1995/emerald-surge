import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Para quem é esse método?",
    a: "Para qualquer pessoa que cansou de tomar loss e quer uma estratégia assertiva.",
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Depende da sua dedicação, mas o método foi desenhado para que você comece a aplicar e ver os primeiros resultados nas primeiras semanas de implementação.",
  },
  {
    q: "Existe garantia?",
    a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento sem perguntas.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail cadastrado. O acesso é vitalício.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-center mb-12">
          Dúvidas <span className="text-gradient-neon">Frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="font-heading text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="absolute bottom-0 left-0 right-0 neon-line" />
    </section>
  );
};

export default FAQSection;
