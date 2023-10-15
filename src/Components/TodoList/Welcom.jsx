import {BsCheckLg} from 'react-icons/bs'
// import img from '../image/loading.png'

const Welcom = () => {
  setTimeout(() => document.querySelector(".welcom").style.display="none", 1)
  return (
    <div>
        <div className="welcom">
            <div className="welcom__blog">
               <div className="welcom__icon">
                 <BsCheckLg />
               </div>
               <span className="welcom__sb">
                 Welcom to
               </span>
               <h1 className="welcom__title">My Todo</h1>
               <p className="welcom__content">
                My Todo helps you stay organized and perform your tasks much faster
               </p>
               {/* <img src={img} alt="" className="welcom__img" /> */}
            </div>
        </div>
    </div>
  )
}

export default Welcom