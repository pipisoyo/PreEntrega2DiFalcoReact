
export const  Button = ( {text = "Botón", variant = "btn btn-primary", functionClick}) => {
  return (
    <button className={`btn ${variant} m-2`} onClick={functionClick} >{text}</button>
  )
}