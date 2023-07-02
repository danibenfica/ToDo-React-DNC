
import HeaderOrganization from "../../components/HeaderOrganization/HeaderOrganization"
import Principal from "../../components/Principal/Principal"
import './index.scss';
const Organization = () => {
  return (
    <div>
      <HeaderOrganization/>
      <Principal/>
      <h2>Bem-vindo ao nosso Planejador Diário!</h2>
      <p className="organizationP">
        Esta é uma ferramenta simples e eficiente para ajudá-lo a organizar suas tarefas diárias.
        Aqui estão algumas dicas sobre como usá-la da melhor forma:
      </p>
      <ul className="howToUse">
        <li>Crie uma nova tarefa digitando o nome na caixa de texto acima e pressionando Enter ou clicando no ícone de adicionar (+).</li>
        <li>Marque uma tarefa como concluída clicando no ícone de marcação de checkbox. Clique novamente para desmarcar.</li>
        <li>Para editar uma tarefa, clique no ícone de edição (lápis) e faça as alterações necessárias. Clique em "Salvar" para confirmar as alterações ou "Cancelar" para descartá-las.</li>
        <li>Se desejar excluir uma tarefa, clique no ícone de exclusão (lixeira). Uma confirmação será exibida antes de excluir permanentemente a tarefa.</li>
      </ul>

      <h2>Dicas de organização:</h2>
      <ul className="tips">
        <li>Priorize as tarefas: Classifique suas tarefas por ordem de prioridade, destacando aquelas mais importantes ou urgentes. Isso ajudará você a se concentrar no que realmente importa.</li>
        <li>Crie uma rotina de revisão: Reserve alguns minutos todos os dias para revisar sua lista de tarefas. Verifique as tarefas concluídas, atualize as pendentes e identifique as próximas ações a serem realizadas.</li>
        <li>Defina metas diárias: Estabeleça metas realistas para cada dia. Identifique as tarefas-chave que deseja concluir e concentre seus esforços nelas. Isso ajuda a manter o foco e a sensação de progresso.</li>
        <li>Quebre as tarefas em etapas menores: Se uma tarefa parecer muito grande ou intimidadora, divida-a em etapas menores e mais gerenciáveis. Isso torna a tarefa mais acessível e aumenta a sensação de realização ao concluir cada etapa.</li>
      </ul>
      <p className="organizationP">
        Fique à vontade para explorar todas as funcionalidades disponíveis e personalizar sua lista de tarefas de acordo com suas necessidades.
        Esperamos que esta ferramenta torne sua rotina mais organizada e produtiva!
      </p>

    </div>
  )
}

export default Organization