


d={"a":2,"s":{"n":4}}
var readlinesync=require("readline-sync")
let n=readlinesync.question("enter the key: ")
for(i in d){
    if(i==n){
        console.log(i,d[i])
    }
}


















