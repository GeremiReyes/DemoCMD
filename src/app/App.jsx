import { Navbar } from '../shared/components/Navbar';
import { Footer } from '../shared/components/Footer';
import { AffiliateSearch, AffiliateSummary, useAffiliateSearch } from '../features/affiliate';
import { CarnetDigital } from '../features/carnet';
import { BeneficiosSection, MOCK_BENEFITS } from '../features/benefits';

export default function App() {
  const { affiliate, query, setQuery, isSearching, search } = useAffiliateSearch();

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-900 flex flex-col justify-between font-sans">
      <Navbar />

      <main className="w-full flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="mb-8">
          <div className="text-left mb-5">
            <h1 className="text-2xl sm:text-3xl font-normal text-slate-800 tracking-tight">
              Consulta de Afiliado
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Buscar por No. de Exequátur o Documento de Afiliado
            </p>
          </div>

          <AffiliateSearch query={query} setQuery={setQuery} isSearching={isSearching} onSubmit={search} />
        </div>

        {affiliate && (
          <div className="grid grid-cols-1 lg:grid-cols-[324px_minmax(0,1fr)] gap-8 lg:gap-10 items-start">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[324px] mb-2 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Carnet Digital de Afiliado
                </span>
              </div>
              <CarnetDigital affiliate={affiliate} />
            </div>

            <div className="space-y-6">
              <AffiliateSummary affiliate={affiliate} />
              <BeneficiosSection benefits={MOCK_BENEFITS} />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
