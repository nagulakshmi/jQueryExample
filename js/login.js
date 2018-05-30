$(document).ready(function() {
    $("#btnLogin").click(function() {
        if (validation()) {
            if ($("#email").val() == 'admin' &&
                $("#password").val() == 'admin') {
                ("#first").load("sample.html");
                //  $("#tt").replaceWith("<h1>hello welcome to my page</h1>");
                return ture;
            } else {
                alert("please try again");
                return false;
            }
        }

    });

    $("#btnReset").click(function(){
        $.ajax({url: "details.html", success: function(result){
            $("#div1").html(result);
        }});
        return false;
    });
});

function validation() {
    var name = $("#email").val();
    var password = $("#password").val();
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
