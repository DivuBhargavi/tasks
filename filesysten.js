const fs= require('fs'); //require the fs modules
fs.readFile('divya.text', 'utf8',(error,data)=>{
if(error){
    console.log("This is a error file", error);
    return;
}
console.log("This is succful file", data);
});
const path= require('path');
const filepath= 'task/filesysten/doc/divya.text';
console.log(path.dirname(filepath));
console.log("This file is succful");