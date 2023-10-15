import React from 'react'
import { useEffect, useState } from "react"
import Replay from './Replay'
import {LiaTimesSolid} from 'react-icons/lia'
import {VscSettings} from 'react-icons/vsc'

import {AiOutlinePushpin} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'

const TodoCard = ( {PaserTodo,toogle, deleteId, paserWelcomShow} ) => {
    const label = PaserTodo.important ?  <div className="list__priority"></div> : <div>Mettre en priorité</div>
   if(PaserTodo.length === null) {
       return (
           <div>
              <Replay />
           </div>
       )
    }
  return (
  <div>      
    <li className="list__ite">
        <div className="list__card">
          <span className="list__content">
            {PaserTodo.content}
          </span>
          <time className="list__time">{PaserTodo.hours}:{PaserTodo.minutes}</time>
          </div>
          <div className='menu'>
            <div className="list__menu">
                <button onClick={toogle} className="list__menu__btn">
                   {label}
                 <AiOutlinePushpin className='list__menu__icon'/>
                </button>
                <button onClick={deleteId} className="list__menu__btn">
                  Supprimer
                <RiDeleteBinLine className='list__menu__icon'/>
              </button>   
            </div>
          </div> 
        </li>
    </div>
  )
                  
}

export default TodoCard