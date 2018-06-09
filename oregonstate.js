/****************************************************************
Oregon State Page
******************************************************************/
//photo credits
function osuChangeColor(event){
	var element1 = document.getElementById("osu-credits");
	element1.style.color = "black";
}
document.getElementById("osu-photo").addEventListener("mouseenter", this.osuChangeColor);

//suprise button
function clickMe(event){
	var element2 = document.getElementById("osu-course-list");
	element2.style.color = "orange";
	element2.style.backgroundColor ="black";
	element2.style.fontStyle = "italic";
}
document.getElementById("osu-button").addEventListener("click", this.clickMe);