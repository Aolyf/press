//unfavorite twitter likes
//Scroll as far bottom as possible on the web app
//Run this 
var elements = document.querySelectorAll(".ProfileTweet-action--unfavorite");
function unfavorite(){
	for(var i = 0; i<elements.length;i++){
	elements[i].click();
} //function to press all the buttons
}
unfavorite();




