//Setting Variables to be used//
//Lists//
const answerBox = ['#btn1', '#btn2', '#btn3', '#btn4'];
const questions = ['What fighter jet is this?', 'What fighter jet is this?', 'What fighter jet is this?', ''];
const answers = [
    ['F-16 Fighting Falcon', 'F-15 Eagle', 'F-18 Super Hornet', 'F-22 Raptor'],
    ['Eurofighter', 'J-15', 'JAS 39 Gripen', 'Dassualt Rafale'],
    ['Su-27', 'J-15', 'MiG 29', 'Su-57']
];
const correctAns = [3, 2, 0];
//Standard Variables//
const nextPage = document.getElementById('nextPage');
const quizHeader = document.getElementById('question');
const btnClass = document.querySelectorAll('.btn');
const quizAnswers = answerBox.map(selector => document.querySelector(selector));
const quizItems = document.querySelectorAll('.quizItem');
const resultItems = document.querySelectorAll('.resultItems');
//Standard Variables Redo Quiz//
const result = document.querySelector('.resultButton');
const displayQAmount = document.getElementById('quizQuestions');
const displayQScore = document.getElementById('scoreResult');
//Numbers
let score = 0;
let questionNum = 0;
let questionAmount = 3;
//Booleans True/False//
let hasClicked = false;
//Functions
function showQuestions(qHeader, qAnswer){
    hasClicked = false;
    nextPage.style.visibility = "hidden";
    qHeader.innerHTML = questions[questionNum];
    quizAnswers.forEach((btn, i) => {
        btn.innerHTML = qAnswer[questionNum][i];    
    });
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
    if (questionNum == questionAmount){
        showResult();
        console.log('working')
    }
    else{  
        if(hasClicked) { 
            nextPage.style.visibility = 'visible'; 
        }
        nextPage.addEventListener('click', function() {
            btnClass.forEach(btn => {
                btn.classList.remove('correctBtn', 'incorrectBtn');
                btn.classList.add('hover');
            });
            questionNum ++;
        }, { once: true});
    
    }
};

function showResult(){
    console.log('working2')
    displayQAmount.innerHTML = questionAmount;
    displayQScore.innerHTML = score;
    result.addEventListener('click', function(){
        resultItems.forEach(rItm =>{
            rItm.style.display = 'none';
        });
        quizItems.forEach(qItm =>{
            qItm.style.display = 'none';
        });
        score = 0;
        questionNum = 0;
        showQuestions(quizHeader, answers)
    })
};
//Main Code//
showQuestions(quizHeader, answers);



