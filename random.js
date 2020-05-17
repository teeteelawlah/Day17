
function randomBodyColour(){
	document.body.style.backgroundColor=bodyColour ();
}

      function bodyColour () {
			var getColour = Math.floor(Math.random() * 0xFFFFFF);
			return "#" + (getColour.toString(16)).substr(-6);
       }
function randomBtnColour(){
	document.getElementById("btn").style.backgroundColor =btnColour();
}
      function btnColour () {
	var getColour = Math.floor(Math.random() * 0xFFFFFF);
	return "#" + (getColour.toString(16)).substr(-6);
       }
