const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],

  getLength() {
    this.chain.push(`( ${this.chain.length} )`);
    return this;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {

    try {
      if  (position > this.chain.length)throw new Error("You can't remove incorrect link!");
    } catch (err) {
      this.chain.length = 0;
      throw err;
    }
    try {
      if (typeof position === "string") throw new Error("You can't remove incorrect link!");
    } catch (err) {
      this.chain.length = 0;
      throw err;
    }
    try {
      if (position <= 0) throw new Error("You can't remove incorrect link!");
    } catch (err) {
      this.chain.length = 0;
      throw err;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    try {
      return this.chain.join("~~");
    } finally {
      this.chain.length = 0;
    }
  },
}

module.exports = {
  chainMaker
};
