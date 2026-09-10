interface PaginaEmConstrucaoProps {
  titulo: string
}

// Placeholder mínimo usado pelas páginas ainda não migradas (Home, Sobre,
// Plataforma, FAQ, Integrantes, Contato) só para manter as rotas
// funcionando. Conteúdo final fica sob responsabilidade do João.
function PaginaEmConstrucao({ titulo }: PaginaEmConstrucaoProps) {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-2 px-[8%] py-20 text-center">
      <h1 className="text-2xl font-semibold text-primary">{titulo}</h1>
      <p className="text-gray-500">Página em construção.</p>
    </section>
  )
}

export default PaginaEmConstrucao
