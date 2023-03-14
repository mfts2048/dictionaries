// function *iteratorGenerator() {
//     yield "1"
//     yield "2"
//     yield "3"
// }

// const iter = iteratorGenerator()

// const node = iter.next()
// console.log(node.value)

function iteratorGenerator(list: any[]) {
    var idx = 0
    var len = list.length

    return {
        next: function() {
            var done = idx >= len
            var value = !done ? list[idx++] : undefined

            return {
                done,
                value
            }
        }
    }
}

const arr = [1, 2, 3, 4, 5]
const iter = iteratorGenerator(arr)

const node = iter.next()
console.log(node)