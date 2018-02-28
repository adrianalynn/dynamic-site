// JavaScript Document
document.getElementById("homeMe").addEventListener("click",funHome );
document.getElementById("contactMe").addEventListener("click",funContact );
document.getElementById("aboutMe").addEventListener("click",funAbout );
document.getElementById("photoMe").addEventListener("click",funPhoto );
function funHome (){
	document.getElementById("homePageText").innerHTML = "Welcome to my home page!";
}
function funContact (){
	document.getElementById("homePageText").innerHTML = "To contact me....";
}
function funAbout (){
	document.getElementById("homePageText").innerHTML = "About me....";
}
function funPhoto (){
	document.getElementById("homePageText").innerHTML = "A picture of me....";
}