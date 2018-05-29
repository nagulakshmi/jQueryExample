$(document).ready(function()
{
    $("#button").click(function()
  {
    //var second='<div><img src="images1.jpg" alt="Processing.."/></div>';
    if ($("#email").val() == 'admin' && $("#password").val() == 'admin')
     {
       $("#tt").load('samples/register.html');
       //$("#tt").replaceWith("<h1>welcome my registration page</h1> ");
       //$(this).hide().after().parent().append(second);
      }
      else {
      alert("please try again");
      }


  });



});
