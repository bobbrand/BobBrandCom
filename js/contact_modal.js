// Copyright 2022 
// Bob Brand 
// All Rights Reserved.

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
        var formFirstName = $("#form-first-name").val()
        var formLastName = $("#form-last-name").val()
        var formEmail = $("#form-email").val()
        var formMessage = $("#form-message").val()
        alert('Submit is pressed ' + formFirstName + ' ' + formLastName + ' ' + formEmail + ' ' + formMessage);
        $('#contactModal').modal('hide');

        Email.send({
            SecureToken: "a5991df1-0724-469f-a636-e19135500559",
            To: 'bobbrand@bobbrand.com',
            From: "bobbrand2@gmail.com",
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
            message => alert(message)
        );
    });
});