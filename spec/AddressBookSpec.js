//lisan uue kirje, milles defineerida projektis vajalikke objekte ning muutujaid
describe("Address Book", function() {
  it("should be able to add a contact", function() {
    //kutsun aadressiraamatu ja kontakti objektid välja
    var addressBook = new AddressBook(),
      thisContact = new Contact();
    //lisan meetodi, millega kontakte aadressraamatusse lisada
    addressBook.addContact(thisContact);
  });
});
