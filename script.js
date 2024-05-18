// redirects the page to new location when the link is clicked
function showAlertAndRedirect(){
    alert("Redirected to a new page!");
    window.location.href="talent.html"
}

// opens playstore and app store when buttons are clicked
let button1= document.getElementsByClassName("google-play");
for(let i=0;i<2;i++){
    button1[i].addEventListener("click", function() {
        window.open('https://play.google.com/store/apps/details?id=com.bluelearn', '_blank');
     
    });
}   

let button2= document.getElementsByClassName("apple-store");
for(let i=0;i<2;i++){
    button2[i].addEventListener("click", function() {
    window.open('https://apps.apple.com/in/app/bluelearn/id1659606724', '_blank');
    });
} 

// FAQs: shows corresponding answer of the ques. clicked
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');

    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            // Hides all answers
            
            answers.forEach(answer => {
                answer.style.display = 'none';
            });
            
            // Shows corresponding answer
            answers[index].style.display = 'block';
        });
    });
});

// Changes the color of the box of the question clicked
document.querySelectorAll('.question').forEach(function(box) {
    box.addEventListener('click', function() {
        // Remove black class from all boxes
        document.querySelectorAll('.question').forEach(function(box) {
            box.classList.remove('black');
        });
        
        // Add black class to clicked box
        this.classList.add('black');
    });
});
