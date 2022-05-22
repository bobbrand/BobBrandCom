// Copyright 2022 
// Bob Brand 
// All Rights Reserved.

// Click handler for Contact button.
//    Aggregates the contact info and message and emails 
function logSubmit(event) {
    console.log(event.timeStamp);
    event.preventDefault();

    var validator = $("form[id='emailButtonForm']").validate({
        rules: {
            contactEmail: {
                required: true,
                email: true
            }
        }
    })

    if (validator.valid()) {
        // Pre-populate the email field with the info already entered
        var contactModal = document.getElementById('contactModal');
        var emailField = contactModal.querySelector('.modal-body input[id="form-email"]');
        emailField.value = $("#contactEmail").val();

        $('#contactModal').modal('show');
    }
    else {
        alert("Please enter a valid Email address.")
    }
}

$(document).ready(function () {

    var formname = document.getElementById('emailButtonForm');
    formname.addEventListener('submit', logSubmit);

    // C0F79DFE84C21854AFCA253C6C1E0BEB0874
    // Click Handler for the Submit button in the email modal
    $('#btnSubmit').click(function () {

        var msgSentToast = document.getElementById('msgSentToast');
        var myToast = bootstrap.Toast.getOrCreateInstance(msgSentToast);

        var formFirstName = $("#form-first-name").val()
        var formLastName = $("#form-last-name").val()
        var formEmail = $("#form-email").val()
        var formMessage = $("#form-message").val()
        var body = "First: " + formFirstName + '<br>'
            + "Last: " + formLastName +
            + "Email: " + formEmail + '<br><br>';
        body += formMessage;

        // alert('Submit is pressed ' + formFirstName + ' ' + formLastName + ' ' + formEmail + ' ' + formMessage);

        $('#contactModal').modal('hide');

        Email.send({
            SecureToken: "a5991df1-0724-469f-a636-e19135500559",
            To: 'bobbrand2@gmail.com',
            From: "bobbrand2@gmail.com",
            Subject: "Contact from Bobbrand.com",
            Body: body
        }).then(
            myToast.show()
        );
    });
});