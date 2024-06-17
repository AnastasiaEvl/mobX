import {makeAutoObservable, runInAction} from "mobx";
import {fromPromise, IPromiseBasedObservable} from "mobx-utils";
import {getPosts, Posts} from "../api/getPosts";

class PostsStore {
    posts?:IPromiseBasedObservable<Posts[]>

    constructor() {
        makeAutoObservable(this)
    }
    getPostsAction=() => {
        this.posts= fromPromise(getPosts())
}
}
export default new PostsStore()
