"use strict";

let myInfo = {
  name: "Kendrick Lamar",
  address: "131 Lennox Ave",
  city: "Bronx",
  state: "New York",
  zip: "10460",
};

function printContact(contact) {
  console.log(contact.name);
  console.log(contact.address);
  console.log(contact.city + ",", contact.state, contact.zip);
}

printContact(myInfo);
