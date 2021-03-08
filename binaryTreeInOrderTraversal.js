function BinaryTreeNode(value,left,right){
    this.value = (value == undefined?0:value)
    this.left = (left==undefined?null:left)
    this.right = (right==undefined?null:right)

}

function BinaryTree(){
    this._root=null
}

BinaryTree.prototype.traverseInOrder = function(){
    taverseInOrderHelper(this._root);

    function  taverseInOrderHelper(node){
        if(!node) return

        traverseInOrderHelper(node.left)
        console.log(node.value)
        traverseInOrderHelper(node.right)

    }
}

//iterative method

BinaryTree.prototype.traverseInOrder = function(){
    let arr=[]
    let done=false
    let current = this._root;

    while(!done){
        if(current!=null){
            arr.push(current)
            current = current.left
        }
        else {
            if(arr.length){
                current = arr.pop()
                console.log(node)
                current = current.right
            }
            else{
                done=true
            }
        }
      

    }

}