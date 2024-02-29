var percentage = +prompt(percentage)

if(percentage >= 90 && percentage <=100){
    console.log("You Have A+ grade")
}
else if (percentage >= 80 && percentage <=90 ){
   
    console.log("You Have A grade")
}
else if(percentage >= 70 && percentage <=80){
    
    console.log("You Have B+ grade")
}
else if(percentage >= 60 && percentage <=70){
    
    console.log("You Have B grade")
}
else if(percentage >= 50 && percentage <=60){
    
    console.log("You Have C grade")
}
else{
    console.log("fail")
}