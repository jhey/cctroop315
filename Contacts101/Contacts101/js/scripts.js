var myContacts = (function () {
    // array of contacts
    var contacts = [];

    // TEMPELTE for EDIT OR DELETE
    // not complete
    var editDelete = function (cId) {
        console.log(contacts[cId]);
    }


    // display all contact to screen/ul
    var showContacts = function () {
        clearResults();
        var liResults = $("#results");  // get the results object
        var currContact;                // current/index contacts info
        for (var i = 0; i < contacts.length; i++) {
            currContact = contacts[i];
            liResults.append('<li>' + currContact.Name + " - " + currContact.Phone + " - " + currContact.Email + '<a onclick="myContacts.doEdit(' + i + ')">Edit</a> - <a onclick="myContacts.doDelete(' + i + ')">Delete</a> </li>');
        }
    }
    //function to clear the results
    var clearResults = function () {
        $("#results").empty();
    }

    // Contacts Constructor
    var Contact = function (name, phone, email) {
        this.Name = name,
        this.Phone = phone,
        this.Email = email
    }

    // func on local scope
    function addContact() {
        // grab the values from form
        var tName = $("#cName").val();
        var tPhone = $("#cPhone").val();
        var tEmail = $("#cEmail").val();
        //console.log(tName, tPhone, tEmail);
        // create a new object from the values
        var tc = new Contact(tName, tPhone, tEmail);
        console.log(tc);
        // add it to the array
        contacts.push(tc);
        showContacts();
    }

    // expose public methods
    return {
        doAdd: addContact,
        doEdit: editDelete,
        doDelete: editDelete
    }

})();