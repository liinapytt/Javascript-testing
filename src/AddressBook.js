//loon aadressiraamatu konstruktorfunktsiooni
function AddressBook() {
  //lisan uue property, mis defineerib kontaktide massiivi
  this.contacts = [];
  //lisan property asünkroonse päringu tarvis
  this.initialComplete = false;
}

//loon uue funktsiooni asünkroonse päringu kaudu andmete saamiseks
AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  setTimeout(function() {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
};

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
