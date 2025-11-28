interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/30 mb-8 transition-all duration-300 hover:shadow-xl">
      <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>

      {children}
    </section>
  );
};
