// Copyright 2022 
// Bob Brand 
// All Rights Reserved.

// Click handler for Contact button.
//    Aggregates the contact info and message and emails 
$(document).ready(function () {
    $('#btnContact').click(function () {
        // alert('Contact pressed ' + $("#contactEmail").val());

        // Pre-populate the email field with the info already entered
        var contactModal = document.getElementById('contactModal');
        var emailField = contactModal.querySelector('.modal-body input[id="form-email"]');
        emailField.value = $("#contactEmail").val();
        $('#contactModal').modal('show');
    });

    // C0F79DFE84C21854AFCA253C6C1E0BEB0874
    $('#btnSubmit').click(function () {

        var msgSentToast = document.getElementById('msgSentToast');
        var myToast = bootstrap.Toast.getOrCreateInstance(msgSentToast);

        var formFirstName = $("#form-first-name").val()
        var formLastName = $("#form-last-name").val()
        var formEmail = $("#form-email").val()
        var formMessage = $("#form-message").val()
        var body = "First: " + formFirstName + '<br>' + "Last: " + formLastName + '<br><br>';
        body += formMessage;

        // alert('Submit is pressed ' + formFirstName + ' ' + formLastName + ' ' + formEmail + ' ' + formMessage);

        $('#contactModal').modal('hide');

        Email.send({
            SecureToken: "a5991df1-0724-469f-a636-e19135500559",
            To: 'bobbrand@bobbrand.com',
            From: "bobbrand2@gmail.com",
            Subject: "Contact from Bobbrand.com",
            Body: body
        }).then(
            // message => alert(message)
            myToast.show()
        );
    });
});