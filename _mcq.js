
// const { fetchQuestion } = require("./questions");

// import { fetchQuestion } from './questions'

const question = document.querySelector('.question');
let ans1 = document.querySelector('#answer1');
console.log('default', ans1.classList);
let ans2 = document.querySelector('#answer2');
let ans3 = document.querySelector('#answer3');
let ans4 = document.querySelector('#answer4');
let point = document.querySelector('#point');
let sum = 0;
let url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`
// let currNum = document.querySelector('.current-num')


// setting background color
ans1.style.backgroundColor = 'rgba(175, 105, 239, 0.4)'

// let checkQuestion = () => {
//     fetch(url)
//     .then(data => {
//         console.log(data);
//         return data.json()
//     }).catch(error => {
//         console.log(111111, error)
//     })

//        let answers = []
//       answers.push(data[0].correct_answer, data[0].incorrect_answers[0], data[0].incorrect_answers[1], data[0].incorrect_answers[2])
//       console.log(answers);

//         question.innerHTML = data[0].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]
// }
// checkQuestion()

let questionOne = () => {
    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(result => {
       let data = result.results

       let answers = []
      answers.push(data[0].correct_answer, data[0].incorrect_answers[0], data[0].incorrect_answers[1], data[0].incorrect_answers[2])

        question.innerHTML = data[0].question
        ans1.innerHTML = answers[0]
        ans2.innerHTML = answers[1]
        ans3.innerHTML = answers[2]
        ans4.innerHTML = answers[3]

        console.log(data[0].correct_answer);
        ans1.addEventListener("click", function(){
            console.log('one');
            if(ans1.innerHTML === data[0].correct_answer){
                point.innerHTML = sum + 1
                ans1.classList.toggle('correct');
                console.log(33333, ans1.classList);
                questionTwo()
                // ans1.classList.remove('correct')
                // ans1.classList.toggle('answer')
            }else{
                ans1.classList.toggle('wrong')
                questionTwo()
                ans1.classList.toggle('answer')
            }
        })
        ans2.addEventListener("click", function(){
            if(ans2.innerHTML === data[0].correct_answer){
                point.innerHTML = sum + 1
            ans2.classList.toggle('correct')
                questionTwo()
                ans2.classList.toggle('answer')
            }else{
                ans2.classList.toggle('wrong')
                questionTwo()
                ans2.classList.toggle('answer')
            }
        })
        ans3.addEventListener("click", function(){
            if(ans3.innerHTML === data[0].correct_answer){
                point.innerHTML = sum + 1
            ans3.classList.toggle('correct')
                questionTwo()
                ans3.classList.toggle('answer')
            }else{
                ans3.classList.toggle('wrong')
                questionTwo()
                ans3.classList.toggle('answer')
            }
        })
        ans4.addEventListener("click", function(){
            if(ans4.innerHTML === data[0].correct_answer){
                point.innerHTML = sum + 1
            ans4.classList.toggle('correct')
                questionTwo()
                ans4.classList.toggle('answer')
            }else{
                ans4.classList.toggle('wrong')
                questionTwo()
                ans4.classList.toggle('answer')
            }
        })
    })
}
questionOne()

let questionTwo = () => {
    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(result => {
       let data = result.results

       let answers = []
      answers.push(data[1].correct_answer, data[1].incorrect_answers[0], data[1].incorrect_answers[1], data[1].incorrect_answers[2])

      console.log(data[1].correct_answer);
      let quesTwo1 = ans1
      let quesTwo2 = ans2
      let quesTwo3 = ans3
      let quesTwo4 = ans4
       

        question.innerHTML = data[1].question
        quesTwo1.innerHTML = answers[0]
        quesTwo2.innerHTML = answers[1]
        quesTwo3.innerHTML = answers[2]
        quesTwo4.innerHTML = answers[3]

        quesTwo1.addEventListener("click", function(){
            console.log('two');
            if(quesTwo1.innerHTML === data[1].correct_answer){
                point.innerHTML = sum + 1
                quesTwo1.classList.toggle('correct')
                questionThree()
                quesTwo1.classList.toggle('answer')
            }else{
                quesTwo1.classList.toggle('wrong')
                questionThree()
                quesTwo1.classList.toggle('answer')
            }
        })
        quesTwo2.addEventListener("click", function(){
            if(quesTwo2.innerHTML === data[1].correct_answer){
                point.innerHTML = sum + 1
                quesTwo2.classList.toggle('correct')
                questionThree()
                quesTwo2.classList.toggle('answer')
            }else{
                quesTwo2.classList.toggle('wrong')
                questionThree()
                quesTwo2.classList.toggle('answer')
            }
        })
        quesTwo3.addEventListener("click", function(){
            if(quesTwo3.innerHTML === data[1].correct_answer){
                point.innerHTML = sum + 1
                quesTwo3.classList.toggle('correct')
                questionThree()
                quesTwo3.classList.toggle('answer')
            }else{
                quesTwo3.classList.toggle('wrong')
                questionThree()
                quesTwo3.classList.toggle('answer')
            }
        })
        quesTwo4.addEventListener("click", function(){
            if(quesTwo4.innerHTML === data[1].correct_answer){
                point.innerHTML = sum + 1
                quesTwo4.classList.toggle('correct')
                questionThree()
                quesTwo4.classList.toggle('answer')
            }else{
                quesTwo4.classList.toggle('wrong')
                questionThree()
                quesTwo4.classList.toggle('answer')
            }
        })
    })
}


let questionThree = () => {
    fetch(url)
    .then(data => {
        return data.json()
    })
    .then(result => {
        let data = result.results

        let answers = []
        answers.push(data[2].correct_answer, data[2].incorrect_answers[0], data[2].incorrect_answers[1], data[2].incorrect_answers[2])

        question.innerHTML = data[2].question
        ans1.innerHTML = answers[0]
        ans2.innerHTML = answers[1]
        ans3.innerHTML = answers[2]
        ans4.innerHTML = answers[3]

        ans1.addEventListener("click", function(){
            console.log('three');
            if(ans1.innerHTML === data[2].correct_answer){
                point.innerHTML = sum + 1
                ans1.classList.toggle('correct')
                questionFour()
                ans1.classList.toggle('answer')
            }else{
                ans1.classList.toggle('wrong')
                questionFour()
                ans1.classList.toggle('answer')
            }
        })
        ans2.addEventListener("click", function(){
            if(ans2.innerHTML === data[2].correct_answer){
                point.innerHTML = sum + 1
                ans2.classList.toggle('correct')
                questionFour()
                ans2.classList.toggle('answer')
            }else{
                ans2.classList.toggle('wrong')
                questionFour()
                ans2.classList.toggle('answer')
            }
        })
        ans3.addEventListener("click", function(){
            if(ans3.innerHTML === data[2].correct_answer){
                point.innerHTML = sum + 1
                ans3.classList.toggle('correct')
                questionFour()
                ans3.classList.toggle('answer')
            }else{
                ans3.classList.toggle('wrong')
                questionFour()
                ans3.classList.toggle('answer')
            }
        })
        ans4.addEventListener("click", function(){
            if(ans4.innerHTML === data[2].correct_answer){
                point.innerHTML = sum + 1
                ans4.classList.toggle('correct')
                questionFour()
                ans4.classList.toggle('answer')
            }else{
                ans4.classList.toggle('wrong')
                questionFour()
                ans4.classList.toggle('answer')
            }
        })
    })
}

// let questionFour = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[3].correct_answer, data[3].incorrect_answers[0], data[3].incorrect_answers[1], data[3].incorrect_answers[2])

//             question.innerHTML = data[3].question
//             ans1.innerHTML = answers[0]
//             ans2.innerHTML = answers[1]
//             ans3.innerHTML = answers[2]
//             ans4.innerHTML = answers[3]

//             ans1.addEventListener("click", ()=> {
//                 if(ans1.innerHTML === data[3].correct_answer){
//                     ans1.classList.toggle('correct')
//                     questionFive()
//                     ans1.classList.toggle('answer')
//                 }else{
//                     ans1.classList.toggle('wrong')
//                     questionFive()
//                     ans1.classList.toggle("answer")
//                 }
//             })
//             ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[3].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionFive()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionFive()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[3].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionFive()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionFive()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[3].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionFive()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionFive()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }

// let questionFive = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[4].correct_answer, data[4].incorrect_answers[0], data[4].incorrect_answers[1], data[4].incorrect_answers[2])
//         console.log(answers);

//         question.innerHTML = data[4].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]

//         ans1.addEventListener("click", () => {
//             if(ans1.innerHTML === data[4].correct_answer){
//                 ans1.classList.toggle('correct')
//                 questionSix()
//                 ans1.classList.toggle('answer')
//             }else{
//                 ans1.classList.toggle('wrong')
//                 questionSix()
//                 ans1.classList.toggle("answer")
//             }
//         })
//         ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[4].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionSix()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionSix()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[4].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionSix()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionSix()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[4].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionSix()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionSix()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }

// let questionSix = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[5].correct_answer, data[5].incorrect_answers[0], data[5].incorrect_answers[1], data[5].incorrect_answers[2])
//         console.log(answers);

//         question.innerHTML = data[5].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]

//         ans1.addEventListener("click", () => {
//             if(ans1.innerHTML === data[5].correct_answer){
//                 ans1.classList.toggle('correct')
//                 questionSeven()
//                 ans1.classList.toggle('answer')
//             }else{
//                 ans1.classList.toggle('wrong')
//                 questionSeven()
//                 ans1.classList.toggle("answer")
//             }
//         })
//         ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[5].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionSeven()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionSeven()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[5].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionSeven()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionSeven()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[5].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionSeven()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionSeven()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }

// let questionSeven = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[6].correct_answer, data[6].incorrect_answers[0], data[6].incorrect_answers[1], data[6].incorrect_answers[2])
//         console.log(answers);

//         question.innerHTML = data[6].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]

//         ans1.addEventListener("click", () => {
//             if(ans1.innerHTML === data[6].correct_answer){
//                 ans1.classList.toggle('correct')
//                 questionEight()
//                 ans1.classList.toggle('answer')
//             }else{
//                 ans1.classList.toggle('wrong')
//                 questionEight()
//                 ans1.classList.toggle("answer")
//             }
//         })
//         ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[6].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionEight()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionEight()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[6].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionEight()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionEight()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[6].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionEight()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionEight()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }

// let questionEight = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[7].correct_answer, data[7].incorrect_answers[0], data[7].incorrect_answers[1], data[7].incorrect_answers[2])
//         console.log(answers);

//         question.innerHTML = data[7].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]

//         ans1.addEventListener("click", () => {
//             if(ans1.innerHTML === data[7].correct_answer){
//                 ans1.classList.toggle('correct')
//                 questionNine()
//                 ans1.classList.toggle('answer')
//             }else{
//                 ans1.classList.toggle('wrong')
//                 questionNine()
//                 ans1.classList.toggle("answer")
//             }
//         })
//         ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[7].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionNine()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionNine()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[7].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionNine()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionNine()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[7].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionNine()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionNine()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }

// let questionNine = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[8].correct_answer, data[8].incorrect_answers[0], data[8].incorrect_answers[1], data[8].incorrect_answers[2])
//         console.log(answers);

//         question.innerHTML = data[8].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]

//         ans1.addEventListener("click", () => {
//             if(ans1.innerHTML === data[8].correct_answer){
//                 ans1.classList.toggle('correct')
//                 questionTen()
//                 ans1.classList.toggle('answer')
//             }else{
//                 ans1.classList.toggle('wrong')
//                 questionTen()
//                 ans1.classList.toggle("answer")
//             }
//         })
//         ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[8].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionTen()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionTen()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[8].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionTen()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionTen()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[8].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionTen()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionTen()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }

// let questionTen = () => {
//     fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(result => {
//         let data = result.results

//         let answers = []
//         answers.push(data[9].correct_answer, data[9].incorrect_answers[0], data[9].incorrect_answers[1], data[9].incorrect_answers[2])
//         console.log(answers);

//         question.innerHTML = data[9].question
//         ans1.innerHTML = answers[0]
//         ans2.innerHTML = answers[1]
//         ans3.innerHTML = answers[2]
//         ans4.innerHTML = answers[3]

//         ans1.addEventListener("click", () => {
//             if(ans1.innerHTML === data[9].correct_answer){
//                 ans1.classList.toggle('correct')
//                 questionSix()
//                 ans1.classList.toggle('answer')
//             }else{
//                 ans1.classList.toggle('wrong')
//                 questionSix()
//                 ans1.classList.toggle("answer")
//             }
//         })
//         ans2.addEventListener("click", () => {
//                 if(ans2.innerHTML === data[9].correct_answer){
//                     ans2.classList.toggle('correct')
//                     questionSix()
//                     ans2.classList.toggle('answer')
//                 }else{
//                     ans2.classList.toggle('wrong')
//                     questionSix()
//                     ans2.classList.toggle("answer")
//                 }
//             })
//             ans3.addEventListener("click", () => {
//                 if(ans3.innerHTML === data[9].correct_answer){
//                     ans3.classList.toggle('correct')
//                     questionSix()
//                     ans3.classList.toggle('answer')
//                 }else{
//                     ans3.classList.toggle('wrong')
//                     questionSix()
//                     ans3.classList.toggle("answer")
//                 }
//             })
//             ans4.addEventListener("click", () => {
//                 if(ans4.innerHTML === data[9].correct_answer){
//                     ans4.classList.toggle('correct')
//                     questionSix()
//                     ans4.classList.toggle('answer')
//                 }else{
//                     ans4.classList.toggle('wrong')
//                     questionSix()
//                     ans4.classList.toggle("answer")
//                 }
//             })
//     })
// }
// questionTen()