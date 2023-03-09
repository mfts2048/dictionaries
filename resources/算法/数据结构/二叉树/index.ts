function TreeNode<T>(val: T, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}

const tree1 = new TreeNode(
    "A",
    new TreeNode(
        "B",
        new TreeNode("D"),
        new TreeNode("E")
    ),
    new TreeNode(
        "C",
        null,
        new TreeNode("F")
    )
)

// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
    if (!root) {
        return
    }

    console.log("当前遍历的节点值是：", root.val)
    preorder(root.left)
    preorder(root.right)
}

preorder(tree1)
