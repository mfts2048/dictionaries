// 定义订阅者类
import {Publisher} from "./Publisher";

export class Observer {
    constructor() {
        // console.log('Observer created')
    }

    update(arg: Publisher) {
        // console.log('Observer.update invoked')
    }
}