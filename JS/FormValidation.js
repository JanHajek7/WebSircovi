$(document).ready(function () {
    "use strict";


    var nameControl, surnameControl, emailControl, TextAreaControl = false;

    function addStyle(object) {
        object.css({
            "border": "3px solid #98ce00",
            "background-color": "rgb(250, 255, 189)"
        });
    }

    var submitBtn = $("button");
    submitBtn.attr("disabled", "disabled");
    //NAME VALIDATION
    $("#name").on("input", function () {
        //console.log("name-change")
        var nameInput = $("#name")

        if (nameInput.val().trim().length <= 2) {
            nameInput.css({
                border: "3px solid red"
            })
            $('[data-toggle="name"]').tooltip()
        } else {
            addStyle(nameInput);
            nameControl = true
        }
    });
    //SURNAME VALIDATION
    $("#surname").on("input", function () {
        //console.log("SURNAME-change")
        var surnameInput = $("#surname")

        if (surnameInput.val().trim().length <= 3) {
            surnameInput.css({
                border: "3px solid red"
            })
            $('[data-toggle="surname"]').tooltip()

        } else {
            addStyle(surnameInput)
            surnameControl = true
        }
    })
    //EMAIL VALIDATION
    $("#email").on("input", function () {
        //console.log("EMAIL-change")
        var emailInput = $("#email")
        var emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,5}\b$/i

        if (!emailPattern.test(emailInput.val().trim())) {
            emailInput.css({
                border: "3px solid red"
            })
            $('[data-toggle="email"]').tooltip()

        } else {
            addStyle(emailInput)
            emailControl = true
        }
    })
    $("#textarea").on("input", function () {
        var textAreaInput = $("#textarea")

        if (textAreaInput.val().trim().length <= 5) {
            textAreaInput.css({
                border: "3px solid red"
            })
            $('[data-toggle="surname"]').tooltip()
        } else {
            addStyle(textAreaInput)
            TextAreaControl = true
        }
    })


    $("form").on("change", function () {
        if (nameControl && TextAreaControl && surnameControl && emailControl && $("input:checkbox").is(":checked")) {
            submitBtn.removeAttr("disabled");
            submitBtn.css({
                "border": "3px solid #98ce00"
            })
            //console.log(nameControl,surnameControl,emailControl,submitBtn, $("input:checkbox"))
        } else {
            submitBtn.attr("disabled");
            submitBtn.css({
                "border": "3px solid #d1d1d1 "
            })
        }
    })
})