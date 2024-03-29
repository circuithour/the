//clear stuff
function clearStuff() {
    response("0");
    document.getElementById('score').textContent = "---------";
    document.getElementById('score').style.color = "#fff";
    //score(element)
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

  //write tally
function tally(correct, incorrect){
    document.getElementById("tally").textContent=correct;
}

    //random operartion
function getRandomOperation() {
    let operations = ["+", "-", "*"];
    return operations[Math.floor(Math.random() * operations.length)];
}

    //make question
function makeQuestion(operation) {
    var random1 = getRandomInt(1, 10);
	var random2 = getRandomInt(2, 9);
    var randomAnswer = 0;
    var btn = document.getElementById("submit");
    btn.disabled = false;
    
    //ensure negatives don't happen
    //swap variables if random1 < random2
    if (operation === '-' && random1 < random2) {
        let t = random2;
        random2 = random1;
        random1 = t;
    }

    //the question
	var q = document.getElementById('question');
    q.innerText = random1.toString() + ' ' + operation + ' ' + random2.toString();


    

    //maths
	if (operation === '+') {
		randomAnswer = random1 + random2;
	} else if (operation === '-') {
        randomAnswer = random1 - random2;
	} else if (operation === '*') {
        randomAnswer = random1 * random2;
    }
    
    return randomAnswer;
}

    //this shit
addEventListener("load", function(){

    var numbers = "";
    var operation = getRandomOperation();
    var randomAnswer = makeQuestion(operation);
    var correct = 0;
    var incorrect = 0;
    var timer = null;

    var audio = {
        notime: new Audio('/resources/sound/mathgame/notime.mp3'),
        correct: new Audio('/resources/sound/mathgame/correct.mp3'),
        wrong: new Audio('/resources/sound/mathgame/wrong.mp3')
    };

    function playAudio(key) {
        if (key in audio) {

            audio[key].currentTime = 0;
            audio[key].play();

        }
    }

    function submit(timerTimeout) {
        clearTimeout(timer);
        var btn = document.getElementById("submit");
        btn.disabled = true;

        var element = document.getElementById('score');
        if (timerTimeout) {
            element.style.color = "#ff0";
            element.innerText = 'No Time!';
            playAudio('notime');
        } else if (numbers === randomAnswer.toString()) {
            element.style.color = "#0f0";
            element.innerText = 'Correct!';
            correct++;
            playAudio('correct');
        } else {
            element.style.color = '#f00';
            element.innerText = 'Wrong!';
            incorrect++;
            playAudio('wrong');
        }   

        tally(correct, incorrect);
        setTimeout(function() {  
            numbers  =  "";
            operation = getRandomOperation();
            randomAnswer = makeQuestion(operation);
            timer = setTimeout(function() {
                submit(true);
            }, 5000);
            clearStuff();  
        }, 3000);  
        
    }

    clearStuff();
    tally(correct, incorrect);

    timer = setTimeout(function() {
        submit(true);
    }, 5000);

    //check maths
    document.getElementById("submit").addEventListener("click", function() {
        submit();
    });

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
    document.getElementById("back").addEventListener("click", function(){
        numbers = numbers.substring(0, numbers.length-1);
        response(numbers);

    })
})