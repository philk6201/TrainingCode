function required() {
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var email = document.getElementById("emailid").value;
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("firstpassword").value;
    var confirmpassword = document.getElementById("secondpassword").value;
    var income = document.getElementById("sourceofincome").value;
    var file = document.getElementById("profile").value;
    var age = document.getElementById("age.").value;
    var mobileno = document.getElementById("mobile-no").value;
    var area = document.getElementById("comment").value;
    var optradio1 = document.getElementById("radio1").checked;
    var optradio2 = document.getElementById("radio2").checked;
    var optradio3 = document.getElementById("radio3").checked;
    console.log("sdfsd", optradio1, optradio2, optradio3);
    var string = "";

    if (firstname == "" || email == "" || username == "" || password == "" || confirmpassword == "" || income == "" || file == "" || age == "" || mobileno == "" || area == "" || lastname == "" || optradio1 == "" && optradio2 == "" && optradio3 == "") {
        if (firstname == "") {
            string += "Please enter your first name." + "\n";
            document.getElementById("firstn-m").innerHTML = "Please enter First name";
        }
        if (lastname == "") {
            string += "Please enter your first name." + "\n";
            document.getElementById("lastn-m").innerHTML = "Please enter last name";
        }

        if (email == "") {
            string += "Please enter your email-id." + "\n";
            document.getElementById("email-m").innerHTML = "Please enter your email-id";
        }
        if (username == "") {
            string += "please enter your username." + "\n";
            document.getElementById("user-m").innerHTML = "Please enter your username";
        }
        if (password == "") {
            string += "Please enter your password." + "\n";
            document.getElementById("pass-m").innerHTML = "**Password length must not exceed 5 characters";
        }
        if (confirmpassword == "") {
            string += "Please enter your confirm-password." + "\n";
            document.getElementById("cnfpass-m").innerHTML = "**password and confirm-password not match";
        }
        if (income == "") {
            string += "Please select your source of income." + "\n";
            document.getElementById("select-m").innerHTML = "Please select your source of income";
        }
        if (file == "") {
            string += "Please upload your profile photo." + "\n";
            document.getElementById("upload-m").innerHTML = "Please upload profile picture";

        }
        if (age == "") {
            string += "Please enter your age." + "\n";
            document.getElementById("age-m").innerHTML = "Enter your age*";

        }
        if (mobileno == "") {
            string += "Please enter your mobile no." + "\n";
            document.getElementById("mobile-m").innerHTML = "Enter your mobile no*";

        }
        if (area == "") {
            string += "Please enter your bio." + "\n";
            document.getElementById("bio-m").innerHTML = "Enter your bio*";

        }
        if (optradio1 == "" && optradio2 == "" && optradio3 == "") {
            string += "please select your gender" + "\n";
        }

        alert(string);
        return false;
    } else {
        alert("code submitted successful");
        return true;
    }
}

function validation() {
    var lastname = document.getElementById("last-name").value;
    if (lastname == "") {
        document.getElementById("lastn-m").innerHTML = "please enter last name";
    } else {
        document.getElementById("lastn-m").innerHTML = ""
    }
    var firstname = document.getElementById("first-name").value;
    if (firstname == "") {
        document.getElementById("firstn-m").innerHTML = "Please enter First name";
    } else {
        document.getElementById("firstn-m").innerHTML = ""
    }
    var email = document.getElementById("emailid").value;
    if (email == "") {
        document.getElementById("email-m").innerHTML = "please enter your mail-id";
    } else {
        document.getElementById("email-m").innerHTML = ""
    }
    var username = document.getElementById("user-name").value;
    if (username == "") {
        document.getElementById("user-m").innerHTML = "please enter your username";
    } else {
        document.getElementById("user-m").innerHTML = ""
    }
    var password = document.getElementById("firstpassword").value;
    if (password.length == "") {
        document.getElementById("pass-m").innerHTML = "**Password length must not exceed 5 characters";
    } else {
        document.getElementById("pass-m").innerHTML = ""
    }
    var confirmpassword = document.getElementById("secondpassword").value;
    if (confirmpassword == password) {
        document.getElementById("cnfpass-m").innerHTML = "";
    } else {
        document.getElementById("cnfpass-m").innerHTML = "**password and confirm-password not match"
    }
    var file = document.getElementById("profile").value;
    if (file == "") {
        document.getElementById("upload-m").innerHTML = "**please upload your profile photos";
    } else {
        document.getElementById("upload-m").innerHTML = ""
    }
    var age = document.getElementById("age.").value;
    if (age == "") {
        document.getElementById("age-m").innerHTML = "please enter your age";
    } else {
        document.getElementById("age-m").innerHTML = ""
    }

    var mobileno = document.getElementById("mobile-no").value;
    if (mobileno == "") {
        document.getElementById("mobile-m").innerHTML = "please enter your mobile no";
    } else {
        document.getElementById("mobile-m").innerHTML = ""
    }
    var area = document.getElementById("comment").value;
    if (area == "") {
        document.getElementById("bio-m").innerHTML = "please enter your bio";
    } else {
        document.getElementById("bio-m").innerHTML = ""
    }
    var optradio1 = document.getElementById("radio1").checked;
    var optradio2 = document.getElementById("radio2").checked;
    var optradio3 = document.getElementById("radio3").checked;
    if (optradio1 == "" && optradio2 == "" && optradio3 == "") {
        document.getElementById("radio-m").innerHTML = "please select your gender";
    } else {
        document.getElementById("radio-m").innerHTML = ""
    }



}
// if (document.getElementById('radio1').checked) {
//     document.getElementById("radio-m").innerHTML = document.getElementById("radio1").value +
//         " radio button checked";
// } else if (document.getElementById('HTML').checked) {
//     document.getElementById("radio-m").innerHTML = document.getElementById("radio2").value +
//         " radio button checked";
// } else if (document.getElementById('JS').checked) {
//     document.getElementById("radio-m").innerHTML = document.getElementById("radio3").value +
//         " radio button checked";
// } else {
//     document.getElementById("radio-m").innerHTML = "No one selected";
// }