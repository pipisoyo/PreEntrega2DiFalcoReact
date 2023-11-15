import { Button } from "../Button/Button";
import { Count } from "../Count/Count";
import { Link } from "react-router-dom";
export const Character = ({ nombreProducto , precio , imagen , stock , rubro, id}) => {
  return (
    <>
    <div className="border border-3 p-3 d-flex flex-column m-2" >
      <h5>{nombreProducto}</h5>
    <img
      src={"src/img/" + imagen}
      alt="Imagen producto" 
      width={120}
      height={120}
    />

  <p>Precio : ${precio}</p>
  
     {/* <Count max={stock} /> */}
    <Link to={`./Character.jsx/${id}`}>
    <Button text="Descripcion" variant="btn-secondary" />
</Link>
    </div>
   
 
    </>
  )
}
