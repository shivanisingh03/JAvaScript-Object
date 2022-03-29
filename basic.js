// Accessing-Object-Properties
// In two ways we can access properties of object i.e.,** dot notation (.)** and bracket notation 
// ([ ]), similar to an array.



// var vegetables ={
//     veg1:"potato",
//     veg2:"brinjal",
//     veg3:"bottle gourd"
//  }
  
//  var vegetable1= vegetables.veg1;
//  var vegetable2= vegetables.veg2;
//  var vegetable3= vegetables.veg3;
 
 
//  console.log(vegetable1);
//  console.log(vegetable2);
//  console.log(vegetable3);
  
//  //output:
//  // potato
//  // brinjal
//  // bottle gourd
 



// var myDetails={
//     "first name":"kumar",
//     "last name": "vadthya",
//     "middle name":"nayak"
//  }
  
//  console.log(myDetails["first name"]);
//  console.log(myDetails["last name"]);
//  console.log(myDetails["middle name"]);
  
//  // output
//  // kumar
//  // vadthya
//  // nayak




// // Updating-a-property


// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
  
  
//  myHome.name="my Villa";
  
//  console.log(myHome);
  
//  //  output
 
//  // {
//  //    name: ‘my Villa’,
//  //    location:"Mumbai",
//  //    Colour:"black",
//  //    Owner:”sharukh khan”,
//  //    neighbours: ["everything!"]
//  // }
 


// // Add-new-properties-to-an-object

// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
 
 
//  myHome.isGood= true;
 
//  console.log(myHome);
 
//  // output
 
//  // {
//  //    name: ‘my Villa’,
//  //    location:"Mumbai",
//  //    Colour:"black",
//  //    Owner:”sharukh khan”,
//  //    neighbours: ["everything!"],
//  //    isGood:true
//  // }
 


// // Deleting-properties-from-an-object

// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"],
//     "isGood":true
//   };
  
//   delete myHome.isGood;
//   console.log(myHome)
 
 
//  //output
//  // {
//  //   name: 'Mannat',
//  //   location: 'Mumbai',
//  //   Colour: 'black',
//  //   owner: 'sharukh khan',
//  //   neighbours: [ 'everything!' ]
//  // }
 
 

// // Check-property-is-there-or-not

// var myDetails={
//     "name":"kumar",
//     "age":24
//  }
//  console.log(myDetails.hasOwnProperty("name"));


//  // output 
//  // true
 


// // Loop-over-an-object


// var cars = ["Maruti", "Mercedes", "BMW"];
// for (car in cars){
// console.log(cars[car])
// }

// // Output:
// // Maruti
// // Mercedes
// // BMW



// const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]
// for(let campus in campus_list){
//    console.log(campus)
// }


// Output: 
// 0
// 1
// 2
// 3



// var person={"name":"gouri","surname":"maity","age":37}
 
// for (person_details in person){
// console.log(person_details+ "= "+person[person_details]);
// }


// Output: 
// name= gouri
// surname= maity
// age= 37




// const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let eachKey in campus){
//   console.log(campus[eachKey])
// }


// Output: 
// Bangalore_campus
// 2016
// three_months






