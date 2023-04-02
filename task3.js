//For the given JSON iterate over all for loops(for,for in,for of,for each)

var cars = [
    { 
    "name" : "BMW",
    "fuel" :"Disel",
    "color" : "White",
    "mileage" : 23
},
{
    "name" : "Audi",
    "fuel" :"Petrol",
    "color" : "Red",
    "mileage" : 24

},
{
    "name" : "Mercedes",
    "fuel" :"Petrol",
    "color" : "Blue",
    "mileage" : 25

}]
// console.log(cars);

//for loop to add 10 to mileage
for(var i = 0;i< cars.length;i++){
    // console.log(cars[i].mileage +10);
}

//for in loop to print all the car names
for(var keys in cars){
    console.log(cars[keys].name);
}

//for of loop
for (var obj of cars ){
    console.log(cars[obj].name)
}
