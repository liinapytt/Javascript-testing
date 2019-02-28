//loon aadressiraamatu konstruktorfunktsiooni
function AddressBook() {
  //lisan uue property, mis defineerib kontaktide massiivi
  this.contacts = [];
}

//loon uue funktsiooni kontaktide lisamiseks, lisab uue kontakti ülalloodud masssiivi
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

//loon funktsiooni kontaktide tagastamiseks
AddressBook.prototype.getContact = function(index) {
  //tagastab sisestatud indeksinumbriga massiivi liikme
  return this.contacts[index];
};
//loon funktsioon kontaktide kustutamiseks
AddressBook.prototype.deleteContact = function(index) {
  //kustutab sisestatud indeksinumbriga massiivi liikme
  this.contacts.splice(index, 1);
};
