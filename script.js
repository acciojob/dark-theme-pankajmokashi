//your code here

let div = document.getElementById("app")
let button = document.getElementById("swap")
// console.log(div, button)

function swapTheme() {
    // console.log(div.className, div.className == "day")
	if(div.className == "day")
	{
		div.className = "night"
	}
	else
	{
		div.className = "day"
	}
}
button.addEventListener("click", swapTheme)