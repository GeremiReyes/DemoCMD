import { CmdLogo } from './CmdLogo';

export const Navbar = () => {
  return (
    <header className="w-full bg-[#064E3B] text-white border-b border-emerald-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CmdLogo className="h-12 w-auto shrink-0" />
          <div>
            <span className="text-base sm:text-lg font-black tracking-tight text-white block leading-tight">
              Consulta de Afiliado
            </span>
            <span className="text-[10px] text-emerald-100 tracking-wider uppercase font-semibold">
              Colegio Médico Dominicano
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
