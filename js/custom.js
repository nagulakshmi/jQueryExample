$(document).ready(function() {
  $("#btnLogin").click(function() {
    if (Validation()) {
      if ($("#txtUserName").val() == 'admin' &&
        $("#txtPassWord").val() == 'admin') {
        // $("#first").load("sample.html");
        $("#logintable").replaceWith("<h1>hello welcome to my page</h1>");
        return ture;
      } else {
        alert("please try again");
        return false;
      }
    }

  });

  $("#btnSubmit").click(function() {
    if (RegisterValidation()) {
      alert('hello');
      if ($("#txtFirstname").val() == 'admin') {
        $("#registertable").replaceWith("<h1>welcome ADMIN</h1>");
        return ture;
      } else {
        alert("INVALID USER");
        return false;
      }

    }

  });

});

function Validation() {
  var name = $("#txtUserName").val();
  var password = $("#txtPassWord").val();
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

function RegisterValidation() {
  var firstname = $("#txtFirstname").val();
  var lastname = $("#txtLastname").val();
  var address = $("#txtAddress").val();
  var country = $("#txtCountry").val();
  var mobileno = $("#txtMobileno").val();
  var dob = $("#txtDob").val();
  var email = $("#txtEmail").val();
  var sex = $("#txtGender").val();

  if (firstname == '' || lastname == '' || address == '' ||  country == '' || mobileno == '' || dob == '' || email == '' || sex == '')
    {
    alert('please enter all fields');
    return false;
  } else {
    return true;
  }

}
