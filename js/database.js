const firebaseConfig = {
    apiKey: "AIzaSyBqGbaDdyUpRSW-F6XSc8tH0kowTPVyHvE",
    authDomain: "intern-123.firebaseapp.com",
    databaseURL: "https://intern-123-default-rtdb.firebaseio.com",
    projectId: "intern-123",
    storageBucket: "intern-123.appspot.com",
    messagingSenderId: "984979155746",
    appId: "1:984979155746:web:6f4b5f6931af55effa137b"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var contactFormDB = firebase.database().ref("Complaint_Form_Axis");

document.getElementById("Complaint_Form_Axis").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var First Name = getElementVal("First Name");
  var Last Name = getElementVal("Last Name");
  var Phone Number = getElementVal("Phone Number");
  var Address = getElementVal("Address");
  var City = getElementVal("City");
  var State = getElementVal("State");
  var Country = getElementVal("Country");

  var PinCode = getElementVal("PinCode");

  var Complain = getElementVal("Complain");

  saveMessages(First Name, Last Name, Phone Number,Address,City,State,PinCode,Complain);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("Complaint_Form_Axis").reset();
}

const saveMessages = (First Name, Last Name, Phone Number,Address,City,State,PinCode,Complain) => {
  var newComplaint_Form_Axis = Complaint_Form_AxisDB.push();

  newContactForm.set({
    First Name : First Name,
     Last Name : Last Name  ,
      Phone Number : Phone Number,
      Address : Address,
      City : City,
      State :State,
      PinCode :PinCode,
      Complain :Complain
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
