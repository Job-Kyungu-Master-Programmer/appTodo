import { useEffect, useState } from "react"
import TodoCard from "./TodoCard"
import {IoMdNotifications} from 'react-icons/io';
import {LiaBrainSolid} from 'react-icons/lia'
import Welcom from "./Welcom";
import Base from "./Base";
import Notification from "./Notification";
import Not from "./Notification";
import Succes from "./Succes";
import ErrorFound from "./ErrorFound";
import Replay from "./Replay";

const TodoList = () => {
     const [todo , setTodo] = useState([])
     const [NewTodo, setNewTodo] = useState('')
     const [showAll, setShowAll] = useState(true)
     const [errorMessage, setErrorMessage] = useState(null)
     const [succesMessage, setSuccesMessage] = useState(null)
     const [errorFound, setErrorFound] = useState(null)


     //Respn json API
     useEffect(() => {
         Base.getAll().then(returnTod => {
             setTodo(returnTod)
         })
     },[])


     //Importancy 
     const toogleOfImportance = id => {
      const todoId = todo.find(tod => tod.id === id)
      const changeIdTodo = {...todoId, important : !todoId.important}
      
       Base.update(id,changeIdTodo).then(updateTod => {
          setTodo(todo.map(t => t.id !== id ? t : updateTod))
      }).catch(found => {
          setErrorFound(`Erreur ⚠️ !!! Cette tâche a déjà été supprimée.`)
          setTodo(todo.filter(t => t.id !== id))
          setTimeout(() => {
             setErrorFound(null)
          }, 2500)
      })
     }

      //Delete Todo
      const DeleteTodo = id => {
         Base.delet(id).then(real => {
             setTodo(todo.map(t => t.id !== id ? t : real))
         })
        .catch(error => {
           setErrorMessage('Une tâche a été supprimée.')
           setTodo(todo.filter(t => t.id !== id))
           setTimeout(() => {
              setErrorMessage(null)
           },2500)
        })
     }
     
     const addTodo = (event) => {
        event.preventDefault()
        let date = new Date()
        const todoObject = {
                content:NewTodo,
                hours: date.getHours(),
                minutes: date.getMinutes(),
                important: Math.random() > 0.5
               }         
          Base.create(todoObject).then(sendPush => {
               setTodo(todo.concat(sendPush))
               setNewTodo('')
         })
         .finally(success => {
            setSuccesMessage('Félicitations! Votre tâche a été ajoutée avec succès.🧠')
            setTimeout(() => {
               setSuccesMessage(null)
            },3500)
         })
      }

     const handlerChange = (e) => {
         console.log(e.target.value)
         setNewTodo(e.target.value)
     }

     //Filter Elements
     const todoToShow = showAll ? todo : todo.filter(tod => tod.important == true)
     //Constante Btn Show 
     const setShow = showAll ? 'Toutes les tâches ' : <div className="task__important">Tâches prioritaires</div>

     console.log('Ne touchez a rien dans ce console, car tout est controler et nous pouvons traquez votre IP adress')

     return (
        <div>
         <article>
           <div className="todo">
            <header className="todo__head">
               <div className="todo__head_header">
               <div className="todo__head__icon">
                  <IoMdNotifications className="todo__head-ico" />
                  <span className="count">
                     {todo.length}
                  </span>
               </div>
               <h1 className="todo__head__title">My Todo</h1>
               <button className='todo__head__btn-search'>
               { <LiaBrainSolid className="todo__head-ico"/>}
               </button>
               </div>
               <Notification notError={errorMessage}/>
               <Succes Succes={succesMessage} />
               <ErrorFound notFound={errorFound}/>
            </header>
              <h2 className="todo__title">Organisez vos taches</h2>
              <form className="todo__top" onSubmit={addTodo}>
                <fieldset className="todo__field">
                <legend>Task todolist</legend>
                <textarea 
                className="todo__textarea"
                placeholder="Ajouter une nouvelle tâche"
                value={NewTodo}
                onChange={handlerChange}>
                </textarea>
                </fieldset>
                <button className="todo__btn">+</button>
              </form>
              <div>
               <div className="list">
                 <div className="list__titles">
                  <h3 className="list__title">Vos taches</h3>
                     <button className="list__switch"
                     onClick={() => setShowAll(!showAll)}>
                        {setShow}
                   </button>  
                 </div>
                 <Replay pi={todo} />
                  <ul className="list__items">
                  {todoToShow.map(todNew =>            
                     <TodoCard 
                     paserWelcomShow={todo}
                     key={todNew.id}
                     PaserTodo={todNew}
                     toogle={() => toogleOfImportance(todNew.id)}
                     deleteId={() => DeleteTodo(todNew.id)} />        
                     )}
                  </ul>
                </div>
               </div>
           </div>
         </article>
         <Welcom />
        </div>
     )
}
export default TodoList