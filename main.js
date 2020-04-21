console.log('main.js loaded')
const textarea = document.getElementById('textarea')


//##################
// DATA FUNCTIONS
//##################

// LOAD DATA
loadText()

// after any change
function saveText(){
	// get values from textarea and put into localstorage
	console.log('asd')
	localStorage.setItem('text',textarea.value)
}

// on init
function loadText(){
	// get data
	const text = localStorage.getItem('text')

	// render data
	textarea.value = text
}


//##################
// BUTTON FUNCTIONS
//##################
function increaseLength(){
	textarea.style.height = textarea.clientHeight+1000+'px'
}

function backToTop(){
	window.location.href = "#top"
}

//##################
// EVENTLISTENERS
//##################
textarea.addEventListener('keydown',e=>{
	saveText()
})
textarea.addEventListener('keyup',e=>{
	saveText()
})