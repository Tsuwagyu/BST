
// using class bc it when we use new Node() its obvious that we r making a specific type of obj
// so something like new Node(5) will create an object called Node(5) with the properties inside that constructor
class Node {

    // every node object will start with these defaults, each node will remember val stored in the node, reference to left / right child
    constructor(data) {
        if(!new.target) {
            throw Error ("Use the new operator to create Node");
        }
        this.data = data;
        this.right = null;
        this.left = null;
    }

    
}

class Tree {
    // arr is the parameter that receives the array
    constructor(arr) {
        // root attribute/property, contains return value buildTree();
        this.root = buildTree(arr);
    }

    includes(value) {



        let currentNode = this.root;

        // start at the tree level 0 root and return boolean true or false if value exists

        return search(currentNode, value);

        function search(currentNode, targetVal) {

            // base cases
            if (currentNode === null) return false; 

            if (currentNode.data === targetVal) return true;

            // recursive cases

            // if current the value is larger/smaller than target value, go to the left OR right and search there and return `true or false`
            if (currentNode.data > targetVal) {
                return search(currentNode.left, targetVal);
            }
            // if the node data doesnt match go to its right branch and check there 
            if (currentNode.data < targetVal) {
                return search(currentNode.right, targetVal);
            }

        }


    }

    // accept value and remove from tree 3 cases to handle
    // node with 2 children
    // node with 1 child
    // node without either

   // deleteItem(value) {

}

// each call to recrusiveBST() chooses the midpoint of the current range, creates a node, then recursively builds that node's left and right subtrees
function recursiveBST(arr, start, end) {

    console.log({start, end});
    // base case
    if (start > end) return null;

    // recursive cases

    else {
        // calculate mid, using math.Floor() to give us the lower of the middle indexes
        let mid = start + Math.floor((end - start) / 2);
        // every recursive call will have its OWN local var named root which is a node object
        // root will store the Node object made with the mid calculated earlier
        const root = new Node(arr[mid]); 
        
        // bst using everything to the left of mid not including mid. recursively builds the left subtree from the portion of the array left of mid
        root.left = recursiveBST(arr, start, mid - 1);

        //bst using everything to the right of the current middle not including mid. recursively builds the righ subtree from the portion of the array right of mid
        root.right = recursiveBST(arr, mid + 1, end); 

        // root.left and root.right now contain the roots of the recursively built subtrees or `null` if no subtree exists (thanks to the constructor default values)
        return root;
    }

}
// takes sortedFilteredArr and uses recursiveBST to return a BST
function buildTree(array) {

    //call removeDupesAndSort, wait for return val, store returned val in sortedArr
    
    let sortedArr = removeDupesAndSort(array);


    function removeDupesAndSort(arr) {

        // filter will make new arr -> pass in item + index -> arr.indexOf returns first occurence of item and index matching
        // if the current index === first occurence value then keep
        let filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
        // take the filtered array -> get new array using spread operator with the same items in it ->  pass in comparison func to sort in ascending order
        let sortedFilteredArr = filteredArr.sort((a, b) => a - b);
        console.log(sortedFilteredArr);
        //we now return an array thats void of duplicates and its in order left to right 
        return sortedFilteredArr;

    }

    // variable to hold arr length
    let n = sortedArr.length;
    // if arr length is 0 return null
    if (n === 0) return null;

    // build the tree using recursiveBST to process the sortedArr from its start till its end
    
    return recursiveBST(sortedArr, 0, sortedArr.length - 1);



}
// getSuccessor() will find the node that will replace the node that needs replacing, later used in deleteNode() for 3 purposes
function getSuccessor(currNode) {

    // take the passed in Node, and go to the right subtree

    currNode = currNode.right;

    // inside the right subtree of that node, keep going to the leftmost branch of the right subtree

    while (currNode !== null && currNode.left !=null) {
        currNode = currNode.left;
    }
    // now we have smallest node in the right subtree as our successor
    return currNode;


}

function deleteNode(root, value) {
    // if there's no node return null, guard clause for recursive portion
    if (root === null) return null;
    // if the current node value is greater than the one we're looking for, go to its left subtree and get its new root to reconnect it later 
    if (root.data > value) {
        root.left = deleteNode(root.left, value);
    }
     // if node val is less than targetval, go to right subtree and find the new value for the root to reonnect later
    else if (root.data < value) {
        root.right = deleteNode(root.right, value);
    }

    // if node's left or right branch is null, the only subtree that exists is the other one
    else {
        // if left node is deleted/missing, replace this node with whatever is on the right
        if (root.left === null) return root.right;
        // if right node is deleted/missing, replace this node with whatever is on the left
        if (root.right === null) return root.left;
        //store the successor node in the successor 
        const successor = getSuccessor(root);
        // copy successor's value into the current node
        root.data = successor.data;
        //go into right subtree and find original node with successor.data and copy its data and return what the right subtree should now start with
        root.right = deleteNode(root.right, successor.data);
    }

    return root;
}



const tree = new Tree([1, 5, 9, 14, 23, 27]);

console.log(tree.includes(1));