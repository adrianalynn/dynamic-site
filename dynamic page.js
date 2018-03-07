// JavaScript Document
var adriana = document.getElementById("adriana")
var adrianaPic = document.getElementById("adriana-pic")
adriana.addEventListener("click", function(){
	if (adrianaPic.className === "hide"){
		adrianaPic.className = "";
	} else {
		adrianaPic.className = "hide";
	}
});

document.getElementById("homeMe").addEventListener("click",funHome );
document.getElementById("contactMe").addEventListener("click",funContact );
document.getElementById("aboutMe").addEventListener("click",funAbout );

function funHome (){
	document.getElementById("homePageText").innerHTML = "Welcome to my page!";
}
function funContact (){
	document.getElementById("homePageText").innerHTML = "To contact me....";
}
function funAbout (){
	document.getElementById("homePageText").innerHTML = "About me....";
}