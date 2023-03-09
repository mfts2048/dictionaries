function ListNode<T>(val: T) {
    this.val = val
    this.next = null
}

const node = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
node.next = node2

node3.next = node.next
node.next = node3

let el = node
while(el) {
    console.log(el.val)
    el = el.next
}

