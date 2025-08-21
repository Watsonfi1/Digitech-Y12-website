//Setting Variables to be used//
//Lists//
const answerBox = ['#btn1', '#btn2', '#btn3', '#btn4'];
const questions = ['What fighter jet is this?', 'What fighter jet is this?', 'What fighter jet is this?', 'What missile is this?', 'What missile is this?', 'What missile is this?', 'Which of these aircraft is the oldest?', 'Which of these Fighter Jets has been sold the most?'];
const answers = [
    ['F-16 Fighting Falcon', 'F-15 Eagle', 'F-18 Super Hornet', 'F-22 Raptor'],
    ['Eurofighter', 'J-15', 'JAS 39 Gripen', 'Dassualt Rafale'],
    ['Su-27', 'J-15', 'MiG 29', 'Su-57'],
    ['Aim 9 Sidewinder','Aim-120 AMRAAM', 'R-77-1', 'R-73'],
    ['Aim-9 Sidewinder','Aim-7 Sparrow', 'R-77-1', 'R-73'],
    ['IRIS-T', 'Meteor BVRAAM', 'Carl Gustav', 'MICA-EM' ],
    ['F-15 Eagle', 'J-10 Vigourous Dragon', 'F-16 Fighting Falcon', 'Su-27 Flanker'],
    ['Mig 29 Fulcrum', 'F-15 Eagle', 'F-16 Fighting Falcon', 'Mig 21 Fishbed']
];
const images = ['./Images/f22.jpg', './Images/Grippen-Closeup.jpg','./Images/Su-27.jpg', './Images/Aim-120.jpg', './Images/R-77-1.jpg', './Images/meteor.jpg', './Images/f4.jpg', './Images/x70.jpg' ]
const correctAns = [3, 2, 0, 1, 2, 1, 0, 3];
//Standard Variables//
const nextPage = document.getElementById('nextPage');
const quizHeader = document.getElementById('question');
const btnClass = document.querySelectorAll('.btn');
const quizAnswers = answerBox.map(selector => document.querySelector(selector));
const quizItems = document.querySelectorAll('.quizItem');
const resultItems = document.querySelectorAll('.resultItems');
const quizImg = document.getElementById('quizImage');
//Standard Variables Redo Quiz//
const result = document.querySelector('.replayButton');
const displayQAmount = document.getElementById('quizQuestions');
const displayQScore = document.getElementById('scoreResult');
//Numbers
let score = 0;
let questionNum = 0;
let questionAmount = 8;
//Booleans True/False//
let hasClicked = false;
//Functions
function showQuestions(qHeader, qAnswer){
    hasClicked = false;
    nextPage.style.visibility = "visable";
    qHeader.innerHTML = questions[questionNum];
    quizAnswers.forEach((btn, i) => {
        btn.innerHTML = qAnswer[questionNum][i];    
    });
    quizImg.src = images[questionNum];
    checkAnswers(clicked =>{
        if (clicked){
            nextQuestion();
        };
    });
};

function checkAnswers(onAnswered){
    btnClass.forEach(button => {
        button.addEventListener('click', function() {
            if (hasClicked) { 
                return;
            };
            hasClicked = true;
            onAnswered(hasClicked);
            const btnIndex = quizAnswers.findIndex(btn => btn.id === this.id);
            if (btnIndex == correctAns[questionNum]){
                quizAnswers.forEach(btn =>{
                    btn.classList.add('incorrectBtn');
                    btn.classList.remove('hover');
                });
                score ++;
                console.log(score);
                this.classList.add('correctBtn');
                this.classList.remove('incorrectBtn');
            }
            else{
                quizAnswers.forEach((btn, i) =>{
                    if(i === correctAns[questionNum]){
                        btn.classList.add('correctBtn');
                        btn.classList.remove('hover');
                    }
                    else{
                        btn.classList.add('incorrectBtn');
                        btn.classList.remove('hover');
                    }
                });
            }
        }, {once : true});
    });
};

function nextQuestion(){
    if(hasClicked) { 
        nextPage.style.visibility = 'visible'; 
    }
    if (questionNum == questionAmount - 1){
        nextPage.innerHTML = 'Finish';
    }
    nextPage.addEventListener('click', function() {
        btnClass.forEach(btn => {
            btn.classList.remove('correctBtn', 'incorrectBtn');
            btn.classList.add('hover');
        });
        if (questionNum == questionAmount - 1){
            showResult();
        } else{
            questionNum ++;
        showQuestions(quizHeader, answers);
        }
    }, { once: true});
}
        

function showResult(){
    nextPage.innerHTML = 'Next Page'
    console.log('working2')
    resultItems.forEach(rItm =>{
            rItm.style.display = 'block';
    });
    quizItems.forEach(qItm =>{
            qItm.style.display = 'none';
    });
    displayQAmount.innerHTML = questionAmount;
    displayQScore.innerHTML = score;
    result.addEventListener('click', function(){
        resultItems.forEach(rItm =>{
            rItm.style.display = 'none';
        });
        quizItems.forEach(qItm =>{
            qItm.style.display = 'block';
            // make it so it reappears and stuff//
        });
        score = 0;
        questionNum = 0;
        showQuestions(quizHeader, answers);
    })
};
//Main Code//
showQuestions(quizHeader, answers);



