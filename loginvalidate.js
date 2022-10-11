//java script logic
function loginValidate()
{
//reqdatagathing logic
var username = document.myform.uname.value;
var password = document.myform.pass.value;
var gen = document.myform.gender.value;
var age1 = document.myform.age.value;
var mobileno = document.myform.mnumber.value;
var add = document.myform.address.value;
/*var qual = document.myform.qualification.value;
var course = document.myform.courses.value;
var date = document.myform.doj.value;
*/


//b.logic
if(username=="")
{
alert("please enter username");
return false;
}
if(password=="")
{
alert("please enter password");
return false;
}
if(age1=="")
{
alert("please enter age");
return false;
}
if(mobileno=="")
{
alert("please enter Mobile NUmber");
return false;
}
if(add=="")
{
alert("please enter address");
return false;
}
if(qual=="")
{
alert("please select qualification");
return false;
}
if(course=="")
{
alert("please select courses");
return false;
}
if(date=="")
{
alert("please select date");
return false;
}
if(gen=="")
{
alert("please select gender");
return false;
}
return true;
}
