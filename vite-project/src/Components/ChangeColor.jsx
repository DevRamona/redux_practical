import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { ChangeColor } from "../Features/theme";

function ChangeColorComponent() {
    const [color, setColor] = useState("")
    const dispatch = useDispatch()
  return (
    <>
    <input type="text" onChange={(event) => {setColor(event.target.value)} }/>
      <button onClick={() => {dispatch(ChangeColor(color))}} className="border px-4">Change Color</button>
    </>
  );
}

export default ChangeColorComponent;
