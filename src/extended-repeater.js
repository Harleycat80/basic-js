const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let optionsDefault={
   repeatTimes: 1,
   separator:'+',
   additionRepeatTimes:1,
   additionSeparator:'|',
   
     ...options
   
  }
  
  let arr=[]
  for (let i=0;i<optionsDefault.additionRepeatTimes;i++) {
   (typeof options.addition=='object')? arr.push(String(options.addition)):arr.push(options.addition)
    
  }
  
 let arr2=[]
 for(let i=0;i<optionsDefault.repeatTimes;i++){
   
   arr2.push(str+arr.join(optionsDefault.additionSeparator))
 }
 return (arr2.join(optionsDefault.separator))
 }

module.exports = {
  repeater
};
