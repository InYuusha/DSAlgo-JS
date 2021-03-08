//children nodes

function BinaryTreeNode(value,left,right) {

    this.value=(value==undefined?0:value)
    this.left = (left==undefined?null:left)
    this.right = (right==undefined?null:right)

}

//root node of binary tree default = null

function BinaryTree(){
    this._root =null;
}


//Pre order traversal
BinaryTree.prototype.traversePreOrder = function(){

    traversePreOrderHelper(this._root);

    function traversePreOrderHelper(node){

        if(!node) return;

        console.log(node.value)
        traversePreOrderHelper(node.left)
        traversePreOrderHelper(node.right)


    }
}


//iterative method 
BinaryTree.prototype.travsersePreOrder= function(){
    let nodeStack = []

    while(nodeStack.length){

        node =nodeStack.pop()
        console.log(node.value)

        if(node.right){
            nodeStack.push(node.right)
        }
        if(node.left){
            nodeStack.push(node.left)
        }
    }
}
