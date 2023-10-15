import task from '../image/Task-pana.svg'

const Replay = ( {pi} ) => {
  if(pi.length !== 0) {
      return null
  }
  return (
    <div>
    <div className='list__replay'>
        <img src={task} alt="todo list tache" />
        <h1 className='list__replay__title'>Vous n'avez pas des tâches ?</h1>
        <p className='list__replay__content'>Veuillez éditer vos tâches journalières</p>
    </div>
</div>
  )
}

export default Replay


/*                                 NOTE BIEN :
                  
                        Aujourd'hui Samedi 14.Oct.2023 

     C'est Fichier 'Replay', fut aussi appeler dans le Fichier 'TodoCard' , mais attention la-ba
     il ne fonctionne pas, voila pourquoi j'ai implanter directement le systeme dans lui-meme le fichier 

    j'ai utiliser ( pi.length !== 0)  => {
        C.a.d que si pi qui est le tableau des 'Todos' N'EST PAS vide , il y'a des tache , soit NULL , 
        au cas contraire affiche toi
     }




*/
