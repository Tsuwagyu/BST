## Binary Search Tree
- I built a binary search tree as a part of the odin project cirriculum, it's meant to allow for fast lookups, insertion, and deletion of data items.
- I used this project to strengthen my understanding of recursion, tree traversal, node and subtree connection during insertion, deletion, and rebalancing
- Node.js to test functionality locally.
- The tree stores numeric values and starts balanced, insertions and deletions can change the balance. Rebalancing is handled explicitly. 

## Composition 
- It's composed of a class which accepts an array when initialized.
- This does not use module exports, to test it I have log statements at the bottom to show the following:
  - The tree is created from an array of random numbers less than 100 > we check the tree is balanced, then print all the elements in the following orders: 
  - Preorder, postorder, and levelorder methods
  - All 3 of the methods use a callback function and traverse the Tree in their respective depth first order and pass each value to the callback
  - We then use the `insertAt()` method to add numbers over 100 to the tree > we check that `Tree` is now unbalanced with the new insertions > we use `rebalance()` method on the `Tree` and ensure that the new version comes out balanced 

## Features
- Build a balanced tree from an array, remove duplicates and sorting numerically.
- Search for existing values and insert values while preventing duplicates.
- Delete nodes with 0, 1, or 2 children
- Traverse values in level order, in order, pre order, and post order.
- Calculate depth and check tree balance
- Rebuild an unbalanced tree.


