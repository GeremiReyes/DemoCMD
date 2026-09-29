export const BeneficiosSection = ({ benefits }) => {
  const renderMerchantLogo = (type) => {
    switch (type) {
      case 'farmacia':
        return (
          <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center p-2 shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
              <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="#FACC15" stroke="none" />
            </svg>
          </div>
        );
      case 'laboratorio':
        return (
          <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center p-2 shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
              <path d="M10 2v7.31L4.89 18.2A2 2 0 0 0 6.64 21h10.72a2 2 0 0 0 1.75-2.8L14 9.31V2" />
              <path d="M8.5 2h7" />
              <circle cx="12" cy="15" r="1.5" fill="#34D399" />
              <circle cx="9" cy="17" r="1" fill="#34D399" />
              <circle cx="15" cy="16" r="1" fill="#34D399" />
            </svg>
          </div>
        );
      case 'seguros':
      default:
        return (
          <div className="w-11 h-11 rounded-xl bg-[#092540] text-white flex items-center justify-center p-2 shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Encabezado: "TUS BENEFICIOS" */}
      <div className="border-b border-slate-200 pb-3 mb-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          TUS BENEFICIOS
        </h2>
      </div>

      {/* Cards de Beneficios limpias */}
      <div className="space-y-3">
        {benefits.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex items-center gap-4"
          >
            {renderMerchantLogo(item.logoSvgType)}

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {item.comercio}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {item.beneficio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
