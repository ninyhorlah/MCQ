// my token: 10247eecdd68cd2d1abb500c2d9726322743b02b



// let questions = ["What language is the best language in the world",
//  'ddddddddddddddddddddddddddddddddddddddddddd',
// "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
// "ggggggggggggggggggggggggggggggggggggggggggggggg",
// "What language is the best language in the world"
// ];

// let answers = ["Javascript",
// "Javascript",
// "Javascript",
// "Javascript"
// ];

// let ans = document.querySelector('.answer');




// function Check(){
//     document.querySelector('#answer1').textContent = '20';
//     document.querySelector('#answer2').textContent = '50';
//     document.querySelector('#answer3').textContent = '10';
//     document.querySelector('#answer4').textContent = '60';
//     document.querySelector('h3').textContent = 'How old are you today?'
//     document.querySelector('.current-num').textContent = '2' 
// }
// Check();

// function solution(){
//     ans.forEach(el => {
//         if( el.textContent === '50'){
//             el.classList.toggle('correct')
            
//         } else {
//             el.classList.toggle('wrong')
//         }
//     });
    
// }

// document.querySelector('.answer').addEventListener('click', solution)

// let randomQuestion = Math.floor(Math.random() * questions.length);
// console.log(randomQuestion); 

// for(i = 0; i < questions.length; i++){
//     console.log(questions[randomQuestion]);
// }



// document.querySelector('h3').textContent = questions[1]


// document.querySelector(".current-num").textContent = '5'


// let allQuestions = [[questions[1], answers[1]]];
// console.log(allQuestions.toString());

const question = document.querySelector('.question');
let ans1 = document.querySelector('#answer1');
const ans2 = document.querySelector('#answer2');
const ans3 = document.querySelector('#answer3');
const ans4 = document.querySelector('#answer4');
let currNum = document.querySelector('.current-num')
// const url = `https://quizapi.io/api/v1/questions?apiKey=QicVkrjAwQ5uLreC54an6PDcftCSxKuBhH9v8Nvr&category=code&difficulty=Easy&limit=1&tags=HTML`
url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`

let randNum = Math.floor(Math.random() * url.length)
let newData;

function check(num){
    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(result => {
        // newData = result
        console.log(result);
        // question.innerHTML = result[randNum].question
        let newResult = [];
        newResult.push(result)
        console.log(newResult);

            newResult.map((el, index) => {
                console.log(el.results);
                question.innerHTML = el.results[index].question   
            ans1.innerHTML = el.answers.answer_a
            // ans1.position = 'answer_a'
            // ans2.innerHTML = el.answers.answer_b
            // ans3.innerHTML = el.answers.answer_c
            // ans4.innerHTML =el.answers.answer_d
        })
        let ans = document.querySelectorAll('.answer')
        for(let i=0; i<ans.length; i++){
            if(ans[i]){
                ans[i].addEventListener("click", function(){
                    if(result[0].correct_answers.answer_a_correct === "true"){
                        console.log("hello");
                    }else if(result[0].correct_answers.answer_b_correct === "true"){
                        console.log("hello");
                    }else if(result[0].correct_answers.answer_c_correct === "true"){
                        console.log("hello");
                    }else if(result[0].correct_answers.answer_d_correct === "true"){
                        console.log("hello");
                    }else{
                        console.log("Leave me");
                    }
                })
            }
        }
        
        
        // 0--------
    })
}
check(randNum);

console.log(newData);
// let ans = document.querySelectorAll('.answer')
// for(let i=0; i<ans.length; i++){
//         ans.addEventListener("click", function(){
//         if(qdata[0].correct_answers.answer_a_correct == true){
//             ans.classList.toggle('correct')
//             check(randNum)
//         }else{
//             ans1.classList.toggle('wrong')
//             check(randNum)
//         }
//     })
// }

let help;

function see(){
    help = 'i know'
}
see()

console.log(help);