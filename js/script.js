
/* التمرين الاول */
// ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed'];
/* let arr = ["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"]; 
let newArray = [];
let newArrayNum = [];
let capLetter=[];
let smLetter=[];
arr.forEach(ar1 => {
   if(ar1.startsWith("a") || ar1.startsWith("A")){
      console.log(ar1);
      if(ar1.startsWith("a")){
         smLetter.push(ar1);
      }
      if(ar1.startsWith("A")){
         capLetter.push(ar1);
      }
   }
});

let smLetterNew = smLetter.sort(function(a , b){ return a.length - b.length});
console.log(smLetterNew);

let capLetterNew = capLetter.sort(function(a , b){ return a.length - b.length});
console.log(capLetter);

let bigArr = smLetterNew.concat(capLetterNew);
console.log(bigArr);
*/
/* ****************************************************************************************************************** */
/* التمرين الثاني */
/*  [39, 3, 'ACZ']  */
/* let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];
let negative = [];
let positive = [];
let alpha    = [];

getResult(arr);
function getResult(arr){
   arr.forEach(ar => {
      if(ar < 0 ){
         negative.push(ar);
      }
      if(ar >= 0){
         positive.push(ar);
      }
      if(typeof(ar) == 'string'){
         alpha.push(ar);
         alpha.sort();
      }
   })
   let res = 0;
   positive.forEach(pos => {
      return res = res + pos;
   });

   let sum = res;
   let count = negative.length;
   alpha = alpha.join("");
   let big= [];
   big[0] = sum;
   big[1] = count;
   big[2] = alpha;
   console.log(big)
} */
/* ****************************************************************************************************************** */
/* التمرين الرابع */
/* find_position_for(letter) */
/* let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
find_position_for("C");
find_position_for("P");
function find_position_for(letter){
   letter = letter.toLowerCase();
   console.log(letters.indexOf(letter) +1);
} */

/* ****************************************************************************************************************** */











