//lisan uue kirje, milles defineerida projektis vajalikke objekte ning muutujaid
describe("Address Book", function() {
  it("should be able to add a contact", function() {
    //kutsun aadressiraamatu objekti välja
    var addressBook = new addressBook(),
      thisContact = new thisContact();

    addressBook.addContact(thisContact);
  });
});
