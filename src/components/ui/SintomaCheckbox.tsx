import type { Sintoma } from '../../types'

interface SintomaCheckboxProps {
  sintoma: Sintoma
  checked: boolean
  onChange: (id: string) => void
}

// Componente controlado por props (sintoma, checked, onChange) — sem
// estado próprio, reaproveitado para os 12 sintomas do simulador.
function SintomaCheckbox({ sintoma, checked, onChange }: SintomaCheckboxProps) {
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => onChange(sintoma.id)}
      />
      <span
        className={`flex flex-col items-center gap-1.5 rounded-xl border-2 p-4 text-center transition-colors ${
          checked
            ? 'border-primary bg-[#b8e0f7] shadow-[0_0_0_3px_rgba(1,159,236,0.2)]'
            : 'border-gray-200 hover:border-secondary hover:bg-[#d0eeff]'
        }`}
      >
        <span className="text-3xl">{sintoma.emoji}</span>
        <span className="text-sm">{sintoma.label}</span>
      </span>
    </label>
  )
}

export default SintomaCheckbox
