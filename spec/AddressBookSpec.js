//lisan uue kirje, milles defineerida projektis vajalikke objekte ning muutujaid
describe("Address Book", function() {
  //defineerin muutujad, mida läbivalt failis kasutan
  var addressBook, thisContact;

  //lisan funktsiooni, millega iga funktsiooni eel aadressraamatu ja kontakti objektid välja kutsutakse
  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it("should be able to add a contact", function() {
    //lisan meetodi, millega kontakte aadressraamatusse lisada
    addressBook.addContact(thisContact);
    //eeldan, et päringu peale tagastakse mulle lisatud kontakt
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  //lisan uue kirjelduse kontakti kustutamiseks
  it("should be able to delete a contact", function() {
    //lisan meetodi, millega kontakte aadressraamatusse lisada
    addressBook.addContact(thisContact);
    //lisan meetodi, millega lisatud kontakti kustutada saan
    addressBook.deleteContact(0);
    // eeldan, et lisatud kontakti objekt on kustutatud
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
