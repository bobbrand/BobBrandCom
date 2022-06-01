// Copyright 2022 
// Bob Brand 
// All Rights Reserved.


$(document).ready(function() {

    var emailContactForm = document.getElementById('emailContactForm');
    var emailMessageForm = document.getElementById('emailMessageForm');

    emailContactForm.addEventListener('submit', onClickContact);
    emailMessageForm.addEventListener('submit', onClickMessage);

    // Click handler for Contact button.
    //    Passes the email address to the contact form
    function onClickContact(event) {
        // console.log(event.timeStamp);
        event.preventDefault(); // The default submit behavior blocks the modal display :(

        // Pre-populate the email field with the info already entered
        var contactModal = document.getElementById('contactModal');
        var emailField = contactModal.querySelector('.modal-body input[id="form-email"]');
        emailField.value = $("#contactEmail").val();

        $('#contactModal').modal('show');
    }

    // Click handler for Submit button.
    //    Aggregates the contact info and message and emails 
    function onClickMessage(event) {
        // console.log(event.timeStamp);
        event.preventDefault();


        var msgSentToast = document.getElementById('msgSentToast');
        var myToast = bootstrap.Toast.getOrCreateInstance(msgSentToast);

        var formFirstName = $("#form-first-name").val()
        var formLastName = $("#form-last-name").val()
        var formEmail = $("#form-email").val()
        var formMessage = $("#form-message").val()
        var body = "First: " + formFirstName + '<br>' +
            "Last: " + formLastName + '<br>' +
            "Email: " + formEmail + '<br><br>';
        body += formMessage;

        // alert('Submit is pressed ' + formFirstName + ' ' + formLastName + ' ' + formEmail + ' ' + formMessage);

        $('#contactModal').modal('hide');

        Email.send({
            SecureToken: "77738cb0-dfec-4138-b31d-bb096863bd0e",
            To: 'bobbrand2@gmail.com',
            From: "nospam@bobbrand.com",
            Subject: "Contact from Bobbrand.com",
            Body: body
        }).then(
            myToast.show()
            // message => alert(message)
        );
    }
});