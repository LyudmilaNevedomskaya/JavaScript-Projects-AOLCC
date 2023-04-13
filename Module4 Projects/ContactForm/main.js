function validateForm(e) {
  e.preventDefault();
  
  let fName = document.forms["myForm"]["fname"].value;
  let lName = document.forms["myForm"]["lname"].value;
  if (fName == "" || !isNaN(fName)) {
    alert("First Name must be filled out!");
    return false;
  }
  if (lName == "" || !isNaN(lName)) {
    alert("Last Name must be filled out!");
    return false;
  }
  console.log(fName);
  console.log(lName);
}