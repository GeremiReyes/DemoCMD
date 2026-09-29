export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-16 py-6 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div>
          <span>
            Copyright © {new Date().getFullYear()} <strong>Colegio Médico Dominicano</strong>.
          </span>
        </div>
        <div className="text-slate-400 text-[11px] font-mono">
          Versión V1-{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
