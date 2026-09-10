interface ResultadoCardProps {
  label: string
  valor: string
  destaqueClass?: string
}

// Card genérico label/valor, reaproveitado 3x no resultado da triagem
// (prioridade, especialista e tempo estimado).
function ResultadoCard({ label, valor, destaqueClass = '' }: ResultadoCardProps) {
  return (
    <div className="rounded-2xl border-t-4 border-secondary bg-light p-5">
      <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </span>
      <span className={`block text-lg font-bold text-primary ${destaqueClass}`}>{valor}</span>
    </div>
  )
}

export default ResultadoCard
