import { useEffect, useRef, useState } from 'react'
import { regrasTriagem, resultadoPadrao } from '../data/regrasTriagem'
import type { ResultadoTriagem } from '../types'

/**
 * Encapsula todo o estado e a lógica do Simulador de Triagem:
 * - useState: sintomas selecionados, resultado calculado e aviso de erro
 * - useEffect: quando um novo resultado é calculado, rola a tela
 *   suavemente até o painel de resultado (mesmo comportamento do
 *   `scrollIntoView` que existia em js/script.js)
 */
export function useTriagem() {
  const [selecionados, setSelecionados] = useState<string[]>([])
  const [resultado, setResultado] = useState<ResultadoTriagem | null>(null)
  const [erroSelecao, setErroSelecao] = useState(false)
  const resultadoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (resultado && resultadoRef.current) {
      resultadoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [resultado])

  function toggleSintoma(id: string) {
    setErroSelecao(false)
    setSelecionados((atual) =>
      atual.includes(id) ? atual.filter((s) => s !== id) : [...atual, id],
    )
  }

  function analisar() {
    if (selecionados.length === 0) {
      setErroSelecao(true)
      return
    }
    const regra = regrasTriagem.find((r) => r.sintomas.some((s) => selecionados.includes(s)))
    setResultado(regra ?? resultadoPadrao)
  }

  function limpar() {
    setSelecionados([])
    setErroSelecao(false)
  }

  function novaTriagem() {
    setResultado(null)
    setSelecionados([])
    setErroSelecao(false)
  }

  return {
    selecionados,
    resultado,
    erroSelecao,
    resultadoRef,
    toggleSintoma,
    analisar,
    limpar,
    novaTriagem,
  }
}
