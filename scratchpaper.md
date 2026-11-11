10 minutes
- figure out way to traverse the each node in the tree? yes, found
- is there any reusable code that would help me traverse that tree? yes, found
- what conditions would be best to check when traversing a tree? check if there's a node occupying that region

insertAt method requirements
- first check if any node exists in the location we wanna insert
- use a helper function to add node in location based on value parameter
- using recursion go through BST

levelOrderForEach()
breadth first function implementation
- algorithm progress horizontally
- uses queue first in first out
- queue: going from left to right on each level of the bst
- nodes are visited at the same "level" before visiting anything else
- 2 arrays, visited and queue
- loop while queue is not empty, remove the root node, iterate to adjacent nodes
- if the node is not in the visited list, then add to visited array and queue array

logNodeData helper function
- traverse each node that has a .data property
- log whatever is in the .data
- and move to the next not null node until we reach null
- in order traversal: visit the left child, the middle node, then the right child
- starting at root node > visit left subtree > continue going left until we reach the leftmost final node, its left child and right child will be null > move back to the previous node with children > print that nodes value and traverse the right subtree of that node > repeat the same for that

logNodeData revamp requirements
- logic for traversing through the nodes will be handled by levelOrderForEach
- logic for logging the stuff inside that node will be handled by logNodeData
- pass the node that levelOrderForEach is currently on to logNodeData
- logNodeData logs the .data property
- what is the difference between breadth first traversal and in order traversal? breadth first traversal will visit nodes level by level instead of "left > middle > right"
- to access a node level by level from top to bottom: start at the root, then move to

10 minutes 
- figure out meaning for inOrder, preOrder, postOrder 
- all will accept callback as parameter
- all throw error if no callback given as argument

inOrderTraversal
- traverse left, visit node, traverse right subtree
- starting at root > go leftmost > log left val > return to parent > log parent val > go right > log right val
- if node is not null > go in, print its left node data, then parent node data, then right node data

preOrderTraversal
- print root > go left sub tree > print left node > go left > print

postOrderForEach
- traverse left > traverse right > visit node
- go all the way left > visit left and right children (if null then print node) > go to the right subtree repeat the same thing 

height(value)
- returns height of node containing the given value
- so if a node is at the bottom of the subtree, it means that it is at height 0, while a node closer to the root, that would be a higher value
- depending on what value is entered into the parameter > we will traverse the left and right tree > check if the value matches with node.value, if it does return height, else return undefined

how do we find the height of a node in the first place? 
- what is height? it is the distance from the root to the furthest leaf node
- use post order traversal method from tree class
- 

depth(value)
- return node depth containing value given
- what is depth of a node? the number of edges present in the path from the root node of a tree to that node.
- depth is counted from the top of the tree instead of the bottom
- similar to height(value) because it's 

isBalanced()
- will it be a class method or a separate function? method because my tree class has everything this thing will need
- what makes a binary tree balanced? it must be balanced at every node, heights of the left and right subtree can at most differ by one

isBalancedHelper() 
- helper function handles will use height and depth methods to determine if tree is balanced
- get absolute difference between height of left and right subtree
- get depth values of left and right subtree

rebalance()
- take in an unbalanced tree and rebalance it
- traversal method to provide new array to buildTree()
- what will this array contain? this array contains nodes for the tree
- what conditions make a balanced binary search tree? a balanced binary search tree is where the difference between height of left and right subtree is 0 or 1. a value 

if rebalance() is built as a function
- it takes a instance of Tree, then we run isBalanced method on the Tree
- if isBalanced returns false then we call buildTree function
