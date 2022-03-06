import { useEffect, useState } from "react"
import { Lists } from "./Lists"
import { Form } from "./Form"
import "./App.css";

const App=()=>{

    const[val,setval]=useState([]);
    const[str,setstr]=useState("");
    const[str_count,setStr_count]=useState("");

    const countItems=(prop)=>{
        (prop.length===0)?setStr_count(""):setStr_count(" : "+prop.length);
    }

    useEffect(()=>{
        countItems(val);
    });
    
    const addItem=(event)=>{
        event.preventDefault();
        if(str.replace(/ /g, '')!==""){
        val.push(
            {
                "id":Math.random(),
                "value":str
            }
        );
        }
        setstr("");
    }

    const crossItem=(prop)=>{
        prop.target.style.textDecorationLine="line-through";
        prop.target.style.borderColor="red";
    }

    const delItem=(prop)=>{
        setval(val.filter((item) => item.id !== prop));
    }

    const delAll=()=>{
        setval([]);
    }

    return(
        <div id="todo-main">
        <div id="todo">
        <h1>ToDo List{str_count}</h1>
        <Lists  val={val}  crossItem={crossItem} delItem={delItem}  />
        <Form str={str} setstr={setstr} addItem={addItem} delAll={delAll} />
        </div>
        </div>
    )
}
export default App