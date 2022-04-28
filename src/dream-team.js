const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let teamName = [];
  if(members){
    for (let i=0; i<members.length; i++) {
      
      if (typeof members[i] == "string") {
        teamName.push(members[i].trim().toUpperCase()[0]);
        
      }
        
    }
    if(teamName.length!=0){
    teamName.sort();
    return teamName.join("")
  }
    else{
      return false
    }
  }
   return false
  }
  


module.exports = {
  createDreamTeam
};
