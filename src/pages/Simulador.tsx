import { Link } from 'react-router-dom'
import { sintomas } from '../data/sintomas'
import { useTriagem } from '../hooks/useTriagem'
import SintomaCheckbox from '../components/ui/SintomaCheckbox'
import ResultadoCard from '../components/ui/ResultadoCard'

const corTexto: Record<string, string> = {
  alta: 'text-red-500',
  media: 'text-amber-500',
  baixa: 'text-green-500',
}

function Simulador() {
  const {
    selecionados,
    resultado,
    erroSelecao,
    resultadoRef,
    toggleSintoma,
    analisar,
    limpar,
    novaTriagem,
  } = useTriagem()

  return (
    <>
      <section className="bg-light px-[8%] py-16 text-center">
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">
          Simulador de <span className="text-secondary">Triagem por IA</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Selecione seus sintomas e veja como nossa IA direciona você ao especialista certo.
        </p>
      </section>

      <section className="px-[8%] py-12">
        <div className="mx-auto max-w-3xl">
          {!resultado && (
            <div className="rounded-[20px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-10">
              <div className="mb-8">
                <h2 className="mb-1.5 text-2xl font-semibold text-primary">
                  🤖 Triagem Inteligente
                </h2>
                <p className="text-gray-600">Selecione os sintomas que você está sentindo:</p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
                {sintomas.map((sintoma) => (
                  <SintomaCheckbox
                    key={sintoma.id}
                    sintoma={sintoma}
                    checked={selecionados.includes(sintoma.id)}
                    onChange={toggleSintoma}
                  />
                ))}
              </div>

              {erroSelecao && (
                <div className="mb-4 rounded-[10px] bg-amber-100 px-4 py-3 text-sm text-amber-800">
                  ⚠️ Selecione ao menos um sintoma antes de analisar.
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={analisar}
                  className="flex-1 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white sm:flex-none"
                >
                  🔍 Analisar Sintomas
                </button>
                <button
                  type="button"
                  onClick={limpar}
                  className="rounded-xl border border-primary px-8 py-3.5 font-semibold text-primary"
                >
                  Limpar seleção
                </button>
              </div>
            </div>
          )}

          {resultado && (
            <div
              ref={resultadoRef}
              className="rounded-[20px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-10"
            >
              <h2 className="mb-5 text-2xl font-semibold text-primary">📊 Resultado da Triagem</h2>

              <div className="mb-5">
                <h4 className="mb-2.5 text-sm font-semibold uppercase text-gray-500">
                  Sintomas informados:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selecionados.map((id) => (
                    <span
                      key={id}
                      className="rounded-full bg-light px-3 py-1 text-sm font-medium text-primary"
                    >
                      {sintomas.find((s) => s.id === id)?.label ?? id}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-5 grid gap-4 sm:grid-cols-3">
                <ResultadoCard
                  label="Prioridade"
                  valor={resultado.prioridade}
                  destaqueClass={corTexto[resultado.cor]}
                />
                <ResultadoCard label="Especialista indicado" valor={resultado.especialista} />
                <ResultadoCard label="Tempo estimado de espera" valor={resultado.tempo} />
              </div>

              <div className="mb-6 rounded-lg border-l-4 border-green-500 bg-green-50 px-4 py-3.5 text-sm text-green-800">
                {resultado.obs}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={novaTriagem}
                  className="rounded-xl bg-primary px-8 py-3.5 font-semibold text-white"
                >
                  Nova Triagem
                </button>
                <Link
                  to="/contato"
                  className="rounded-xl border border-primary px-8 py-3.5 font-semibold text-primary"
                >
                  Falar com Equipe
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-[8%] pb-16">
        <div className="flex items-start gap-3.5 rounded-2xl border border-amber-200 bg-amber-100 p-5">
          <span className="text-2xl">⚕️</span>
          <p className="text-sm text-amber-900">
            <strong>Aviso importante:</strong> Este simulador é apenas educacional e não
            substitui uma consulta médica real. Em caso de emergência, ligue 192 (SAMU) ou 193
            (Bombeiros).
          </p>
        </div>
      </section>
    </>
  )
}

export default Simulador
