const FIELDS = [
  ['Nombre:', 'nombre', 'font-bold text-slate-800 text-sm'],
  ['Exequátur:', 'exequatur', 'font-bold font-mono text-emerald-700 text-sm'],
  ['Profesión:', 'profesion', 'font-bold text-slate-800'],
  ['Cédula:', 'cedula', 'font-mono text-slate-700'],
  ['Colegiatura CMD:', 'colegiatura', 'font-mono text-slate-700'],
  ['Vigencia:', 'fechaVencimiento', 'font-semibold text-slate-700'],
];

export const AffiliateSummary = ({ affiliate }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
    <div className="border-b border-slate-100 pb-2.5 mb-3 min-h-5 flex items-start">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
        Datos del Afiliado
      </span>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
      {FIELDS.map(([label, key, cls]) => (
        <div key={key}>
          <span className="text-slate-400 block font-medium">{label}</span>
          <span className={cls}>{affiliate[key]}</span>
        </div>
      ))}
    </div>
  </div>
);
