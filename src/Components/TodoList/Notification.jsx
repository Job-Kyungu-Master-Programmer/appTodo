
const  Notification = ( {notError} ) => {
  if(notError === null) {
       return null 
  }
  return (
    <div>
        <div className="notError">
           {notError}
        </div>
    </div>
  )
}
export default Notification