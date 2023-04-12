function getDictionaryInfo() {

  // Defining a dictionary
  let Animal = {
    species: "Dog",
    color: "Brown",
    breed: "Labrador",
    age: 3,
    sound: "Bark!!!"
  }
  // Deleting one key-value pair
  delete Animal.color;

  // Displaying value on click
  document.getElementById("Dictionary").innerHTML = Animal.sound;
}