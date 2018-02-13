var elements = document.getElementsByClassName("classNameHere");
//nodelist of elements, can exchange with id or tag or whatever
function press(){
	for(var i = 0; i<elements.length;i++){
	elements[i].click();
} //function to press all the buttons
}
press(); //crank it to 11
