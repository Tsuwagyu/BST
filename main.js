
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
        // buildTree(arr) returns root node of complete BST, return value gets assigned to this.root
        this.root = buildTree(arr);
    }
}
 // added recursive function before buildTree so i can use it in btw
function recursiveBST(arr, start, end) {

    console.log({start, end});

    if (start > end) return null;

    else {
    
        let mid = start + Math.floor((end - start) / 2);
        // every recursive call will have its OWN local var named root
        const root = new Node(arr[mid]); 
        
        // bst using everything to the left of the current middle
        root.left = recursiveBST(arr, start, mid - 1);

        //bst using everything to the right of the current middle
        root.right = recursiveBST(arr, mid + 1, end); 

        return root;
    }

}

function buildTree(array) {
    //call removeDupesAndSort, wait for return val, store returned val in sorted
    //removeDupesAndSort is hoisted so it should be fine to have the reference up here
    let sortedArr = removeDupesAndSort(array);

    console.log(sortedArr);

    function removeDupesAndSort(arr) {

        // filter checks if the index of the first occurence is matching with the current index
        // indexOf finds the position of the first occurence of a specified value within arr or string
        let filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
        //.sort() method alone bc it converts value to string and sorts lexographically
        //.sort with a compare function, if value comes out negative then a comes before b, if the value comes out positive a comes after b
        let sortedFilteredArr = [...filteredArr].sort((a, b) => a - b);

        return sortedFilteredArr;

    }

    let n = sortedArr.length;
    
    if (n === 0) return null;

    // call recursiveBST w these 3 vals return the result;
    
    return recursiveBST(sortedArr, 0, sortedArr.length - 1);



}

function includes(value) {

    // start at main node when comparing value and node data

    let currentNode = this.root;

    if (currentNode.data === value) return true;

    return search(currentNode, value);

    function search(currentNode, targetVal) {
        if (currentNode === null) return false;

        if (currentNode.data === targetVal) return true;

        if (currentNode.data > targetVal) {
            return search(currentNode.left, targetVal);
        }

        if (currentNode.data < targetVal) {
            return search(currentNode.right, targetVal);
        }





    }

    
    
    
    


}



const exampleArray = [1, 5, 9, 14, 23, 27];

const tree = buildTree(exampleArray);

console.log(tree);