 
import { useState } from "react"
import {Minus,Plus,Undo2,Redo2} from "lucide-react"

 function Counter() {
const [history,setHistory] = useState([0])

const [position,setPosition] = useState(0)


const currentValue = history[position];
const addValueToHistory = (newValue) =>{
    //remove if any future history if we have gone back and creating a new branch
const newHistory = history.slice(0,position +1)
setHistory([...newHistory,newValue])
setPosition(position + 1)
}

const decrement =()=>addValueToHistory(currentValue -1);
const increment =()=>addValueToHistory(currentValue + 1);

console.log(history,position);

const undo = () =>{
    if(position > 0){
        setPosition(position-1)
    }
}

const redo = () =>{
        if(position < history.length -1){
        setPosition(position+1)
    }
}
  return (
  <div className="flex min-h-screen flex-col justify-center items-center  `pt-[15px]` bg-linear-to-r/increasing from-indigo-500 to-teal-400 dark:text-black">
<h1>Counter APP with undo / redo </h1>
<div className="flex justify-center items-center ">
    <div className="text-7xl font-bold tabular-nums">{currentValue}</div>
</div>
<div className="flex mt-5 justify-center items-center gap-4">
    <button onClick={decrement}>
        <Minus className="h-4 w-4"/>
    </button>
       <button onClick={increment}>
        <Plus className="h-4 w-4"/>
    </button>
</div>
<div className="flex mt-5 justify-center items-center gap-4">
    <button disabled={position===0} className="flex justify-center gap-2 items-center" onClick={undo}  variant={'secondary'}> Undo
        <Undo2 className="h-4 w-4" />
    </button>
    <div className="text-sm text-muted-foreground">
        {position+1}/{history.length}
    </div>
      <button className="flex justify-center gap-2 items-center" disabled={position === history.length -1} onClick={redo} variant={'secondary'}> Redo
        <Redo2 className="h-4 w-4" />
    </button>
</div>
  </div>
  )
}

export default Counter;