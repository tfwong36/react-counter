import CounterGroup from "./CounterGroup"
import CounterSizeGenerator from "./CounterSizeGenerator"
import CounterGroupSum from "./CounterGroupSum"
import { useState } from "react";

function MultiCounter(props){
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size){
        setSize(size);
    }

    function increase(){
        setSum(sum+1);
    }

    function decrease(){
        setSum(sum-1);
    }

    function reset(){
        setSum(0);
    }
    
    return(
        <div className="MultiCounter">
        <CounterSizeGenerator updateCounterSize={updateCounterSize} reset={reset}></CounterSizeGenerator>
        <CounterGroup size={size} increase={increase} decrease={decrease}></CounterGroup>
        <CounterGroupSum sum={sum}></CounterGroupSum>
        </div>
    );
}

export default MultiCounter;