
// using class bc it when we use new Node() its obvious that we r making a specific type of obj
class Node {

    // every node will start with these defaults, each node will remember val stored in the node, reference to left / right child
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
        this.start = start;
        this.end = end;
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
    
    // n - 1 because indeces start at 0, .length gives us total number of items in the array so we need to remove 1 to get the right indeces count
    let mid = Math.floor((n - 1) / 2);
    let root = new Node(sortedArr[mid]);

    








}



const exampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];