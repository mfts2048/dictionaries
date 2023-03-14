// 定义手机硬件这类产品的抽象产品类
export class HardWare {
    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
    operateByOrder() {
        throw new Error("抽象产品方法不允许直接调用，你需要将我重写！")
    }
}

export class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}

// 定义具体硬件的具体产品类
export class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
}