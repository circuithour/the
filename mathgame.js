var numbers = "";
var operation = getRandomOperation();
var randomAnswer = 0;

    //clear stuff
    function clearStuff() {
        var numbers = "";
        response(numbers);
        var element = "";
        score(element);
    }
 
    //make random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // generate random number between 1 and 50
}

  //write answer
function response(numbers){
    if (numbers.length>0) {
        document.getElementById("response").textContent=numbers; 
    } else {
        document.getElementById("response").textContent="0";
    }
}

    //random operartion
function getRandomOperation() {
    let operations = ["+", "-", "*"];
    return operations[Math.floor(Math.random() * operations.length)]
}

    //make question
function makeQuestion() {
    var random1 = getRandomInt(1, 50);
	var random2 = getRandomInt(5, 45);
	var randomAnswer = 0;

    //the question
	var q = document.getElementById('question')
	q.innerText = random1.toString() + ' ' + operation + ' ' + random2.toString()

    //maths
	if (operation === '+') {
		randomAnswer = random1 + random2
	} else if (operation === '-') {
        randomAnswer = random1 - random2
	} else if (operation === '*') {
        randomAnswer = random1 * random2
	}
}


        


    //this shit
addEventListener("load", function(){
    makeQuestion()

    //check maths
    document.getElementById("submit").addEventListener("click", function(){
		var element = document.getElementById('score')
		if (numbers === randomAnswer.toString()) {
			element.style.color = "#0f0"
			element.innerText = 'Correct!'
		} else {
            element.style.color = '#f00'
            element.innerText = 'Wrong!!'
		}

        setTimeout(clearStuff, 2999)
        setTimeout(makeQuestion, 3000)
       
    })

    //buttonms
    document.getElementById("zero").addEventListener("click", function(){
        numbers+="0";
        response(numbers);
    })
    document.getElementById("one").addEventListener("click", function(){
        numbers+="1";
        response(numbers);
    })
    document.getElementById("two").addEventListener("click", function(){
        numbers+="2";
        response(numbers);
    })
    document.getElementById("three").addEventListener("click", function(){
        numbers+="3";
        response(numbers);
    })
    document.getElementById("four").addEventListener("click", function(){
        numbers+="4";
        response(numbers);
    })
    document.getElementById("five").addEventListener("click", function(){
        numbers+="5";
        response(numbers);
    })
    document.getElementById("six").addEventListener("click", function(){
        numbers+="6";
        response(numbers);
    })
    document.getElementById("seven").addEventListener("click", function(){
        numbers+="7";
        response(numbers);
    })
    document.getElementById("eight").addEventListener("click", function(){
        numbers+="8";
        response(numbers);
    })
    document.getElementById("nine").addEventListener("click", function(){
        numbers+="9";
        response(numbers);
    })
    
})