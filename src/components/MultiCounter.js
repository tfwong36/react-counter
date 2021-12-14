import CounterGroup from "./CounterGroup"
import CounterSizeGenerator from "./CounterSizeGenerator"
import CounterGroupSum from "./CounterGroupSum"
import { useState } from "react";
import { useSelector } from "react-redux";

function MultiCounter(props){
    const size = useSelector(state => state.size)
    const sum = useSelector(state => state.sum)
    
    return(
        <div className="MultiCounter">
        <CounterSizeGenerator></CounterSizeGenerator>
        <CounterGroup size={size}></CounterGroup>
        <CounterGroupSum sum={sum}></CounterGroupSum>
        </div>
    );
}

export default MultiCounter;