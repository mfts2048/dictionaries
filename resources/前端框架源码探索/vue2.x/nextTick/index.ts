const callbacks: any[] = []
let pending = false

export function nextTick(cb?: (...args: any[]) => any, ctx?: object) {
    let _resolve: (value: unknown) => void
    callbacks.push(() => {
        if (cb) {
            try {
                cb.call(ctx)
            } catch (e: any) {
                handleError()
            }
        } else if (_resolve) {
            _resolve(ctx)
        }
    })
    timerFunc()
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(resolve => {
            _resolve = resolve
        })
    }
}

const p = Promise.resolve()
const timerFunc = () => {
    p.then(flushCallbacks)
}

function flushCallbacks() {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
        copies[i]()
    }
}

function handleError() {
    console.log('handleError')
}

console.log(1)
console.log(2)
nextTick(() => {
    console.log(3)
    console.log(4)
})
console.log(5)
nextTick(() => {
    console.log(6)
})
console.log(7)