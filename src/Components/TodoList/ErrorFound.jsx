const  ErrorFound = ( {notFound} ) => {
    if(notFound === null) {
         return null 
    }
    return (
      <div>
          <div className="notError">
             {notFound}
          </div>
      </div>
    )
  }
  export default ErrorFound