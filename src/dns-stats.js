const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {


  domains=domains.map(item=>item.split('.').reverse())
  let res={}
  let res1=[]
  for(let j=0;j<domains.length;j++){
  for (let i=domains[j].length-1;i>=0;i--){
    res1.push(('.'+(domains[j].slice(0,i+1)).join('.')))
    
  }
}

let res2=[...new Set(res1)].sort((a,b)=>a.length-b.length)

let count=0
  for(let i=0;i<res2.length;i++){
    for (let j=0;j<res1.length;j++){
      if(res1[j]==res2[i])
      count+=1
    }
    res[res2[i]]=count
    
   count=0
    

  }
return res

  
} 


module.exports = {
  getDNSStats
};
