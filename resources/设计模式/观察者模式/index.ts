import {Publisher} from "./Publisher";
import {Observer} from "./Observer";

class PrdPublisher<T> extends Publisher {
    private prdState: T | null

    constructor() {
        super();
        // 初始化需求文档
        this.prdState = null
        // 韩梅梅还没有拉群，开发群目前为空
        this.observers = []
        // console.log('PrdPublisher created')
    }

    // 该方法用于获取当前的prdState
    getState() {
        return this.prdState
    }

    // 该方法用于改变prdState的值
    setState(state) {
        // console.log('PrdPublisher.setState invoked')
        // prd的值发生改变
        this.prdState = state
        // 需求文档变更，立刻通知所有开发者
        this.notify()
    }
}

class DeveloperObserver<T> extends Observer {
    private prdState: T | null

    constructor() {
        super();
        // 需求文档一开始还不存在，prd初始为空对象
        this.prdState = null
        // console.log('DeveloperObserver created')
    }

    // 重写一个具体的update方法
    update(publisher: PrdPublisher<T>) {
        // console.log('DeveloperObserver.update invoked')
        // 更新需求文档
        this.prdState = publisher.getState()
        // 调用工作函数
        this.work()
    }

    work() {
        // 获取需求文档
        const prd = this.prdState

        // 开始基于需求文档提供的信息搬砖。。。
        console.log('996 begins...', prd)
    }
}

const lilei = new DeveloperObserver()
const A = new DeveloperObserver()
const B =  new DeveloperObserver()

const hanmeimei = new PrdPublisher()

const prd = {
    name: 'Hello 文档'
}

hanmeimei.add(lilei)
hanmeimei.add(A)
hanmeimei.add(B)

hanmeimei.setState(prd)