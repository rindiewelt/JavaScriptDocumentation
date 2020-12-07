/*~~~ Declarasi Array ~~~*/
a = Array(4)        //array kosong 4 member; [ <4 empty items> ]
a = []              //Declare a is array 0 member
a[1] = 0            //[ <1 empty item>, 0 ]; Bisa Boy

/*~~~ akses member array ~~~*/
a = [5,6,7,8,9]
b = a[a.length-1]        //9;     a[-1]  gak berlaku
b = a.slice(2,4)         //[7,8]; a[2:4] gak berlaku

/*~~~ gabung array ~~~*/
a = [1,2,3]; b = [4,5,6]; c = 1
d = a.concat(b,c)        //[1,2,3,4,5,6,1]

/*~~~ PUSH POP shift unshift ~~~*/
a = [1,2,3,4]            //a =   [1,2,3,4]
a.push(5,6)              //a =   [1,2,3,4,5,6]
a.pop()                  //a =   [1,2,3,4,5]
a.shift()                //a =     [2,3,4,5]; kalo 1 member gak bisa shift
a.unshift(0,1)           //a = [0,1,2,3,4,5]

/*~~~ DELETE and ADD array element ~~~*/
a = [0,1,9,3]
a.splice(2,1,8,9)        //[0,1,8,9,3] di index 2, hapus 1 , masuk 8,9
a.splice(2,0,[1,2,3])    // a = [ 0, 1, [ 1, 2, 3 ], 8, 9, 3 ]

/*~~~ Array => String => Number => String => Array ~~~*/
a = [1,2,'3','4']        //a = [1,2,'3','4']
a = a.join('')           //a = "1234"
a = parseInt(a)          //a = 1234 | parseInt(a,16) => hexadecimal number    | ada juga parseFloat(), Number() | 
a = a.toString()         //a = "1234"
a = a.split('')          //a = ['1','2','3','4']
a = 1234
a = parseInt(a).toString().split('').map(n=> parseInt(n)) //[1,2,3,4]; merubah num menjadi num array


/*~~~ MODIFIKASI element Array ~~~*/
a = ['1','4',3,2]
b = a.reverse()          //[ 2 , 3 ,'4','1']
b = a.sort()             //['1', 2 , 3 ,'4']  
b = a.copyWithin(2,0)    //['1',2,'1',2] copy di 0, paste di 2

/*~~~ sort yang benar ~~~*/
b = a.sort((n,m) => n-m) //ascending [1,2,3,4]
b = a.sort((n,m) => m-n) //descending [4,3,2,1]

/*~~~ FIND first match ~~~*/
a = ["6","5","4","4"]
b = a.includes("6")      //true   ada 6?; 2nd par is start
b = a.indexOf("4")       //2      dimana 4? (first) if not => -1; 2nd par is start
Array.prototype.indexOfAll = function(val){ return this.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []); }; //[1,4,3,4].indexOfAll(4) => [1,3]; dimana aja 4? (all index)
b = a.indexOfAll("4")    //[2,3]  dimana aja 4? (all index)
Array.prototype.count = function(val){ var c = 0; for(var i = 0; i < this.length; ++i){ if(this[i] == val) c++;} return c;}; //[1,4,3,4].count(4) => 2; ada berapa 4?
b = a.count("4")         //2      ada berapa "4"?

/*~~~ MENERAPKAN FUNGSI untuk setiap anggota array ~~~*/
a = [2, 3, 4, 5]
b = a.map(n => n**2)     //[4,9,16,25]

/*~~~ Kyk MAP tapi bawa total, TOTAL = RETURN DI LOOP SEBELUMNYA ~~~*/
a = [1, 2, 3]                            
b = a.reduce((total,num) => total+num, 0)   //6; sum(a); 0 = initial total 

/*~~~ Kyk MAP juga tapi ngecheck apakah sesuai ~~~*/
a = [2, 3, 6, 7]
b = a.some(n => n > 3)      //true   ada yang sesuai?
b = a.every(n => n > 3)     //false  semuanya sesuai?
b = a.find(n => n > 3)      //6      return yg sesuai (first)
b = a.filter(n => n > 3)    //[6,7]  return yg sesuai (semua)
b = a.findIndex(n => n > 3) //2      return index yg sesuai (first)

/*~~~ Usefull Function ~~~*/
function removeTheSame(arr){ //to remove the same member in array, return each number that inculde in array
    for (let i = 0; i < arr.length-1; i++) {
        while(arr.includes(arr[i], i+1)){
            arr.splice(arr.indexOf(arr[i], i+1),1)
        }  
    }
    return arr
}

function factorial(num){ //calculate factorial of num
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
}

function isPrime(num) { //is num prime? true or false
  if (num !== 2 && num % 2 === 0) {
    return false
  }
  for(let i = 3; i < num; i += 2){
    if(num % i === 0){
      return false
    }
  }
  return true
}

function primeBetween(lowNum, hiNum){ //prime between lowerNum and higherNum (that num is included)
  if (lowNum % 2 === 0) {lowNum++}
  if (hiNum % 2 === 0) {hiNum--}
  let res = [], flag, i, j
  for (i = lowNum; i <= hiNum; i += 2) {
    flag = 0;
    for (j = 3; j < i; j += 2) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        res.push(i)
    }
  }
return res
}

//logarithm with specific base
const logBase = (n, base) => Math.log(n) / Math.log(base);

//bilangan prima
var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]


//ssss
function primeBetween(lowNum, hiNum){ //prime between lowerNum and higherNum (that num is included)
  if (lowNum % 2 === 0) {lowNum++}
  if (hiNum % 2 === 0) {hiNum--}
  let res = [], flag, i, j
  for (i = lowNum; i <= hiNum; i += 2) {
    flag = 0;
    for (j = 3; j < i; j+=2) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        res.push(i)
    }
}
return res
}

function step(g, m, n) {
  let primeList = primeBetween(m,n)
  let len = primeList.length, diff, i, j
  for (i = 0; i < len - 1; i++) {
      j = i + 1
      diff = primeList[j] - primeList[i]
      for (j; diff <= g; j++) {
          diff = primeList[j] - primeList[i]
          if (diff === g) {
              return [primeList[i], primeList[j]]
          }
      }
  }
  return null
}

function toHex(d) { //decimal to hex (max 255, min 0)
  if(d < 0 ) {return "00";}
  if(d > 255 ) {return "FF";}
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}