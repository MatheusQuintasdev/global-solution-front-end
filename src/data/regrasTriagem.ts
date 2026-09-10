import type { RegraTriagem } from '../types'

/**
 * Regras de priorização da triagem.
 *
 * IMPORTANTE: estas 9 regras são as mesmas de js/script.js (regrasTriagem),
 * na mesma ordem. A análise usa a PRIMEIRA regra cujo array `sintomas`
 * tem interseção com os sintomas selecionados pelo usuário (equivalente
 * ao `for...of` + `.some()` + `break` do script original). Não altere
 * a ordem nem os valores sem que essa lógica seja revisada.
 */
export const regrasTriagem: RegraTriagem[] = [
  {
    sintomas: ['dor_peito', 'falta_ar'],
    prioridade: 'Alta',
    cor: 'alta',
    especialista: 'Cardiologista / UPA',
    tempo: 'Imediato',
    obs: '⚠️ Pode indicar urgência cardiovascular. Considere ligar 192 (SAMU).',
  },
  {
    sintomas: ['falta_ar', 'tosse', 'febre'],
    prioridade: 'Alta',
    cor: 'alta',
    especialista: 'Pneumologista',
    tempo: '5 a 10 min',
    obs: 'Possível infecção respiratória grave. Avaliação urgente recomendada.',
  },
  {
    sintomas: ['febre', 'tosse'],
    prioridade: 'Média',
    cor: 'media',
    especialista: 'Clínico Geral',
    tempo: '8 min',
    obs: 'Sintomas compatíveis com infecção viral.',
  },
  {
    sintomas: ['febre', 'dor_garganta'],
    prioridade: 'Média',
    cor: 'media',
    especialista: 'Otorrinolaringologista',
    tempo: '10 min',
    obs: 'Possível faringite ou amigdalite.',
  },
  {
    sintomas: ['nausea', 'dor_abdominal'],
    prioridade: 'Média',
    cor: 'media',
    especialista: 'Gastroenterologista',
    tempo: '12 min',
    obs: 'Evite automedicação até a consulta.',
  },
  {
    sintomas: ['dor_cabeca', 'cansaco'],
    prioridade: 'Baixa',
    cor: 'baixa',
    especialista: 'Clínico Geral',
    tempo: '15 min',
    obs: 'Pode estar relacionado a tensão ou desidratação.',
  },
  {
    sintomas: ['alergia'],
    prioridade: 'Baixa',
    cor: 'baixa',
    especialista: 'Alergologista',
    tempo: '15 min',
    obs: 'Avaliação de alergias e sensibilidades.',
  },
  {
    sintomas: ['visao'],
    prioridade: 'Média',
    cor: 'media',
    especialista: 'Oftalmologista',
    tempo: '10 min',
    obs: 'Alterações visuais devem ser avaliadas rapidamente.',
  },
  {
    sintomas: ['dor_costas'],
    prioridade: 'Baixa',
    cor: 'baixa',
    especialista: 'Ortopedista',
    tempo: '18 min',
    obs: 'Evite esforço físico até a avaliação.',
  },
]

// Resultado usado quando nenhuma regra específica combina com a seleção
// (mesmo fallback do script original).
export const resultadoPadrao: RegraTriagem = {
  sintomas: [],
  prioridade: 'Baixa',
  cor: 'baixa',
  especialista: 'Clínico Geral',
  tempo: '15 a 20 min',
  obs: 'Seus sintomas serão avaliados por um clínico geral.',
}
