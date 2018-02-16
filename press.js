var elements = document.getElementsByClassName("classNameHere");
//nodelist of elements, can exchange with id or tag or whatever
function press(){
	for(var i = 0; i<elements.length;i++){
	elements[i].click();
} //function to press all the buttons
}
press(); //crank it to 11
//sidenote: if you run this while the follow button is pressed you WILL unfollow those people
