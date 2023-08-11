function printObjectProperties(Obj) {
  if (Object.keys(Obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let props in Obj) {
      console.log(props + ": " + Obj[props]);
    }
  }
}

var StudentDets1 = {
  Name: "Rimon Dipta",
  Student: true,
  Age: 20,
  Address: "Dhaka, Bangladesh",
};

var StudentDets2 = {};

printObjectProperties(StudentDets1);
printObjectProperties(StudentDets2);
// Output :
// Name: Rimon Dipta
// Student: true
// Age: 20
// Address: Dhaka, Bangladesh
// Object is empty
