const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!date){
      return ( 'Unable to determine the time of year!')
    
    }
  
  if ((new Date(date)=="Invalid Date")||( typeof date== 'number')||(date.hasOwnProperty ('getDate'))||(date.hasOwnProperty ('toString')))
  
  {
      throw new Error("Invalid date!")
    }
    try{
      date.hasOwnProperty ('toString')
    }
    catch(er){
      throw er
    }
    try{
      new Date(date)
    }
  catch(er){
    throw er
    }
    try{
      typeof date
    }
  catch(er){
    throw er
    }
    try{
      date.hasOwnProperty ('getDate')
    }
  catch(er){
    throw er
    }
   
  let month=['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter']
    
  return(month[date.getMonth()])
       
  
    }
  

module.exports = {
  getSeason
};
