export const AffiliateSearch = ({ query, setQuery, isSearching, onSubmit }) => (
  <div className="w-full max-w-2xl mx-auto">
    <form onSubmit={onSubmit} className="flex items-center shadow-xs">
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ingrese el Exequátur (ej. 12345-RD)"
          aria-label="Exequátur o documento de afiliado"
          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-l-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#047857] focus:border-transparent transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={isSearching}
        className="px-8 py-3 bg-[#047857] hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-r-lg transition-colors cursor-pointer flex items-center gap-2 shrink-0 disabled:opacity-75"
      >
        {isSearching ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Buscando...</span>
          </>
        ) : (
          <span>Buscar</span>
        )}
      </button>
    </form>
  </div>
);
