function main() {
    var questions = [
        {
            prompt: "Question 1/10\nIs Leorio a teenager?\n(y) yes\n(n) no",
            answer: "y",
        },
        {
            prompt: "Question 2/10\n",
            answer: "true",
        }
    ]
    var score = 0;
    for(var i=0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){
            score++;
            alert("correct");
        } else {
            alert("WRONG!")
        }
    }
    alert("you got " + score + "/" + questions.length);
    alert("this quiz was made by artykiwi (Refresh page to restart quiz)")
}

setTimeout(main, 0)
