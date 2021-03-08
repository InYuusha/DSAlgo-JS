function BinaryTree(){
    this._root-null;
}

function BinaryTreeNode(value,left,right){
    this.value = (value == undefined?0:value)
    this.left = (left==undefined?null:left)
    this.right =(right==undefined?null:right)

}

function traversePostOrder(){
    traversePostOrderHelper(this._root)

    function traversePostOrderHelper(node){
        if(!node) return
        
        

    }
}