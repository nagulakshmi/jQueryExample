$(document).ready(function() {
    $("#btnLogin").click(function() {
        if (validation()) {
            if ($("#txtUserName").val() == "admin" &&
                $("#txtPassword").val() == "admin") {
                return true;
            } else {
                alert("Please try again...")
                return false;
            }
        }
    });
});

function validation() {
    var name = $("#txtUserName").val();
    var password = $("#txtPassword").val();
    if (name == '' || password == '') {
        alert('Enter username and password');
        return false;
    } else if (password.length < 4) {
        alert('password must be atleast 4 characters ');
        return false;
    } else {
        return true;
    }
}
