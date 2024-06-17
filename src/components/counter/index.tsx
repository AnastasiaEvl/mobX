import { observer } from "mobx-react-lite";
import CounterStore from "../../stores/counter-store";

type Props={
    increment: (value:number)=>void;
    decrement: (value:number)=>void;
    count: number;
    total:number;
}

export const Counter =({increment, decrement, count, total}:Props) => {
    return (
        <>
            <button onClick={()=>increment(1)}>+</button>
            <span>{count}</span>
            <button onClick={()=>decrement(1)}>-</button>
            <span>{total}</span>
        </>
    )
}

export default Counter
