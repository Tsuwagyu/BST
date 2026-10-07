# BST
Binary Search Tree assignment

Currently a work in progress. Core tree operations and all four traversals have been implemented. Height, depth, balance checking, rebalancing, and a dedicated automated test setup planned.

Reason for building

It's to stregnthen my understanding of data structures by implementing their behavior directly. The most important parts have been reasoning through recursive base cases, reconnecting subtrees post deletion, and understanding why depth first and breadth first traversal need different approaches.

Current functionality
- Build an initially balanced tree from an array of numbers, removing duplicates and sorting the values first
- Search for a value using the tree's ordering
- Insert values while preventing duplicates
- Delete nodes with zero, one, or two children using an in order successor for the two child case
- Visit values in level-order, post-order, pre-order through callbacks

Run locally

git clone https://github.com/Tsuwagyu/BST.git
cd BST
node main.js

The current demonstration at the bottom of main.js builds a tree and logs its post-traversal
const tree = new Tree([1, 5, 9, 15, 17, 18, 20]);
tree.postOrderForEach(logNodeData);

The classes currently live in main.js without module exports. To see other operations edit the demonstration in the file.

Available methods

- includes(value)	Returns whether a value exists in the tree.
- insertAt(value)	Inserts a value if it is not already present.
- deleteItem(value)	Removes a value and updates the root when necessary.
- levelOrderForEach(callback)	Visits values breadth-first using a FIFO queue.
- inOrderForEach(callback)	Visits left subtree, current value, then right subtree.
- preOrderForEach(callback)	Visits current value, left subtree, then right subtree.
- postOrderForEach(callback)	Visits left subtree, right subtree, then current value.

Traversal callbacks recieve stored value, each traversal requires a function and throws an error if one isn't provided

Next components to add
- Height and depth calculations
- Balance checking and rebalancing
- Automated test for empty trees, duplicate values, root deletion, traversal order

The tree is balanced during the initial construction, insertions and deletions do not automatically rebalance it. Current checks use console rather than automated test suite

Acknowledgement
- This is based on The Odin Project Binary Search tree assignment. The implementation and comments document my learning as I continue to work on this.