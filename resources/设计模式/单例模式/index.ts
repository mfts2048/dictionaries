// class SingleDog {
//     private static instance: Boolean | SingleDog;
//
//     show() {
//         console.log("我是一个单例对象")
//     }
//
//     static getInstance() {
//         if (SingleDog.instance instanceof SingleDog) {
//             SingleDog.instance = new SingleDog()
//         }
//
//         return SingleDog.instance
//     }
// }

class SingleDog {
    show() {
        console.log("我是一个单例对象")
    }

    static getInstance() {
        let instance: boolean | SingleDog
        return function() {
            if (!instance) {
                instance = new SingleDog()
            }
            return instance
        }
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2)