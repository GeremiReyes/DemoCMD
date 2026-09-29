import { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { CmdLogo } from '../../../shared/components/CmdLogo';
import referenceQr from '../../../assets/images/reference_qr.png';
import { downloadCarnet } from '../utils/downloadCarnet';

export const CarnetDigital = ({ affiliate }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCard = async () => {
    setIsDownloading(true);
    try {
      await downloadCarnet(affiliate);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Error downloading card:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-[300px] sm:max-w-[324px] aspect-[5398/8560] bg-white rounded-[22px] shadow-xl border border-slate-200 overflow-hidden select-none">
        <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-br from-[#0F766E] via-[#047857] to-[#064E3B] overflow-hidden">
          <div className="absolute -left-24 bottom-0 h-64 w-80 rounded-[45%] bg-[#34D399] opacity-25"></div>
          <div className="absolute left-36 -top-12 h-80 w-24 rotate-[28deg] bg-[#A7F3D0] opacity-20"></div>
          <div className="absolute right-0 top-10 h-72 w-48 rotate-45 bg-[#10B981] opacity-20"></div>
        </div>
        <svg className="absolute inset-x-0 top-[34%] z-[1] h-[16%] w-full" viewBox="0 0 540 140" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 74C118 20 213 10 326 54C426 93 482 118 540 82V140H0V74Z" fill="#FFFFFF" />
        </svg>

        <div className="absolute inset-x-0 top-[6%] z-20 flex justify-center">
          <div className="flex items-center gap-2">
            <CmdLogo className="h-15 w-auto" />
            <span className="max-w-28 text-left text-[0.60rem] sm:text-[0.70rem] text-emerald-50 tracking-wider uppercase font-bold leading-tight">
              Colegio Médico Dominicano
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[22%] z-10 flex justify-center">
          <div className="w-[42%] aspect-square rounded-full bg-white p-[5px] shadow-lg ring-[3px] ring-white border-[3px] border-black">
            <img
              src={affiliate.fotoUrl}
              alt={affiliate.nombre}
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop';
              }}
            />
          </div>
        </div>

        <div className="absolute inset-x-0 top-[50%] z-10 text-center px-4">
          <h2 className="text-[1.14rem] sm:text-[1.25rem] font-black text-slate-950 tracking-tight leading-tight">
            {affiliate.nombre}
          </h2>

          <p className="text-[0.86rem] sm:text-[0.95rem] font-black text-[#047857] mt-1.5 leading-tight">
            {affiliate.profesion}
          </p>

          <p className="mt-1 text-[0.6rem] sm:text-[0.66rem] font-semibold text-slate-600 font-mono">
            Exequátur: {affiliate.exequatur}
          </p>
        </div>

        <div className="absolute inset-x-0 top-[68%] z-10 flex justify-center">
          <img src={referenceQr} alt="" className="w-[31%] aspect-square object-contain" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[7%] overflow-hidden">
          <svg
            viewBox="0 0 360 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path d="M0 16C95 11 178 21 262 70H0V16Z" fill="#10B981" />
            <path d="M0 42C105 25 205 32 320 70H0V42Z" fill="#064E3B" />
            <path d="M208 70C254 51 297 54 360 70H208Z" fill="#CBD5E1" />
          </svg>
        </div>
      </div>

      {/* Botón Descargar Imagen del Carnet */}
      <div className="w-full max-w-[300px] sm:max-w-[324px] mt-4">
        <button
          onClick={handleDownloadCard}
          disabled={isDownloading}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#047857] hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75"
        >
          {isDownloading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Generando carnet...</span>
            </>
          ) : downloadSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>¡Imagen Descargada!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Descargar Imagen del Carnet</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
