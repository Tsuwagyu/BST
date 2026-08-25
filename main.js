
// using class bc it when we use new Node() its obvious that we r making a specific type of obj
class Node {

    // every node will start with these defaults, each node will remember val stored in the node, reference to left / right child
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }

    
}

class Tree {
    // arr is the parameter that receives the array
    constructor(arr) {
        // without root being set to null, js skips it as undefined
        // with this.root set to null, its value is considered nothing but it exists
        this.root = null;
    }
}

function buildTree(array) {

    let arr = array;

    function findDupes {
        // filter checks if the index of the first occurence is matching with the current index
        // indexOf finds the position of the first occurence of a specified value within arr or string
        arr.filter((item, index) => arr.indexOf(item) === index);
    }


}