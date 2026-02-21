const CTA_LINK = "https://api.whatsapp.com/send/?phone=11912835695&text=Olá%2C+tenho+interesse+saber+mais+sobre+a+estratégia.&type=phone_number&app_absent=0";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

const CTAButton = ({ children, className = "", size = "default" }: CTAButtonProps) => {
  const sizeClasses = size === "large"
    ? "px-10 py-5 text-lg md:text-xl"
    : "px-8 py-4 text-base md:text-lg";

  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block font-heading font-bold uppercase tracking-wider
        bg-primary text-primary-foreground
        rounded-lg
        animate-pulse-neon
        transition-all duration-300
        hover:scale-105 hover:brightness-110
        ${sizeClasses}
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default CTAButton;
