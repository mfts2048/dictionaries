import { MobilePhoneFactory } from './base'
import { AndroidOS } from './os'
import { QualcommHardWare } from './hardWare'

// 具体工厂继承自抽象工厂
class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        // 提供安卓系统实例
        return new AndroidOS()
    }

    createHardWare() {
        // 提供高通硬件实例
        return new QualcommHardWare()
    }
}

// 这是我的手机
const myPhone = new FakeStarFactory()
// 让它拥有操作系统
const myOs = myPhone.createOS()
// 让它拥有硬件
const myHardWare = myPhone.createHardWare()
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
myOs.controlHardWare()
// 唤醒硬件(输出‘我会用高通的方式去运转’)
myHardWare.operateByOrder()