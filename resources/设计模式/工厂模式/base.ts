export class MobilePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！")
    }
    // 提供硬件的接口
    createHardWare() {
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！")
    }
}