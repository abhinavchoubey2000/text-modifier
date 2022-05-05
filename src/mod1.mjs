let s = "abhinav is a good boy";
let split_s = s.split(" ");
console.log(split_s);
let arranged_sentence = "";
for (let index = 0; index < split_s.length; index++) {
     arranged_sentence = arranged_sentence+split_s[index].charAt(0).toUpperCase()+split_s[index].slice(1,split_s[index].length) 
     arranged_sentence = arranged_sentence+" "
}