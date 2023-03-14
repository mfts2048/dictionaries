// 定义操作系统这类产品的抽象产品类
export class OS {
    controlHardWare() {
        throw new Error("抽象产品方法不允许直接调用，你需要将我重写！")
    }
}

export class AppleOS extends OS {
    controlHardWare() {
        console.log('我会用🍎的方式去操作硬件')
    }
}

// 定义具体操作系统的具体产品类
export class AndroidOS extends OS {
    controlHardWare() {
        console.log('我会用安卓的方式去操作硬件')
    }
}