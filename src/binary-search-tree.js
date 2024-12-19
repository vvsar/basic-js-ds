const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor()
  {
    this.treeRoot = null;
  }

  root() {
    if (!this.treeRoot) {
      return null;
    }
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);
    if (!this.treeRoot) {
      this.treeRoot = node;
      return;
    }
    let current = this.treeRoot;
    while (true) {
      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else if (data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        break;
      }
    }
  }

  has(data) {
    let current = this.treeRoot;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.treeRoot;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        break;
      }
    }
    return current;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.treeRoot;
    if(!current) {
      return null;
    }
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.treeRoot;
    if(!current) {
      return null;
    }
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};