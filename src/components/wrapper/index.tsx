import Counter from "../counter";
import {observer} from "mobx-react-lite";
import CounterStore from "../../stores/counter-store";
import {useEffect} from "react";
import {useStores} from "../../hook/root-store-context";

const counter1 = new CounterStore()
const counter2 = new CounterStore()

export const Wrapper = observer(() => {
    const {post: {getPostsAction, posts}} = useStores()
    useEffect(() => {
        getPostsAction()
    }, []);

    if (!posts) {
        return null
    }

    return posts.case({
        pending: () => <div>Loading...</div>,
        rejected: () => <div>Error</div>,
        fulfilled: (value) => (
            <div>
                {value[0].body}
                <Counter {...counter1} total={counter1.total}/>
                <Counter {...counter2} total={counter2.total}/>
            </div>),

    })
})
