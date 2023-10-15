import React from 'react'

const Succes = ( {Succes} ) => {
    if(Succes === null) {
       return null
    }
    return (
        <div>
           <div className="notError notSucces">
              {Succes}
           </div>
        </div>
    )
}

export default Succes