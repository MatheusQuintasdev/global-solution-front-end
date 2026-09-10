export type CorPrioridade = 'alta' | 'media' | 'baixa'

export interface Sintoma {
  id: string
  label: string
  emoji: string
}

/**
 * Uma regra de triagem: relaciona um conjunto de sintomas a uma
 * prioridade, especialista, tempo estimado e observação.
 * Migrada 1:1 das regras originais de js/script.js.
 */
export interface RegraTriagem {
  sintomas: string[]
  prioridade: string
  cor: CorPrioridade
  especialista: string
  tempo: string
  obs: string
}

export type ResultadoTriagem = RegraTriagem
