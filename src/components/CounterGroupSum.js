import { useSelector } from "react-redux";

function CounterGroupSum(props){
    const sum = useSelector(state => state.sum)
    return(
        <div>
            Sum: {sum}
        </div>
    )
}

export default CounterGroupSum;