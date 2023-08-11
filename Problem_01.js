function printObjectProperties(Object) {
  for (let props in Object) {
    console.log(props + ": " + Object[props]);
  }
}

var StudentDets = {
  Name: "Rimon Dipta",
  Student: true,
  Age: 20,
  Address: "Dhaka, Bangladesh",
};

printObjectProperties(StudentDets);
// Output :
// Name: Rimon Dipta
// Student: true
// Age: 20
// Address: Dhaka, Bangladesh
