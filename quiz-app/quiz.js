
$(document).ready(function() {
    console.log('Script Loaded');
});

// http://5d76bf96515d1a0014085cf9.mockapi.io/quiz

var html=document.getElementById("thequiz");



const getQuiz = async () => {
    let url = "http://5d76bf96515d1a0014085cf9.mockapi.io/quiz"
const response = await fetch("./j.json");
if (response.status !== 200){
    throw new Error('cannot fetch the data')
}
const data = await response.json();
return data;


};

getQuiz()
  .then (data => 
    {
        for(i=0;i<data.length;i++){
            // console.log(heading.className = data[i].id)
        //  heading.innerHTML = data[i].question
        // console.log(options.innerHTML =data[i].options);
            let htmlcontent = `
        <section class="quiz-item">
        <h3  id="heading">${data[0].question}</h3>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q1" value="1">
                <p>${data[0].options[0]}</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q1" value="2" >
                <p>${data[0].options[1]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q1" value="3" >
                <p>${data[0].options[2]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q1" value="4" >
                <p>${data[0].options[3]}</</p>
            </label>
        </div>
    </section>
    <section class="quiz-item">
        <h3  id="heading">${data[1].question}</h3>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q2" value="1">
                <p>${data[1].options[0]}</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q2" value="2" >
                <p>${data[1].options[1]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q2" value="3" >
                <p>${data[1].options[2]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q2" value="4" >
                <p>${data[1].options[3]}</</p>
            </label>
        </div>
    </section>  
    <section class="quiz-item">
        <h3  id="heading">${data[2].question}</h3>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q3" value="1">
                <p>${data[2].options[0]}</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q3" value="2" >
                <p>${data[2].options[1]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q3" value="3" >
                <p>${data[2].options[2]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q3" value="4" >
                <p>${data[2].options[3]}</</p>
            </label>
        </div>
    </section> 
    <section class="quiz-item">
        <h3  id="heading">${data[3].question}</h3>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q4" value="1">
                <p>${data[3].options[0]}</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q4" value="2" >
                <p>${data[3].options[1]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q4" value="3" >
                <p>${data[3].options[2]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q4" value="4" >
                <p>${data[3].options[3]}</</p>
            </label>
        </div>
    </section>
    <section class="quiz-item">
        <h3  id="heading">${data[4].question}</h3>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q5" value="1">
                <p>${data[4].options[0]}</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q5" value="2" >
                <p>${data[4].options[1]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q5" value="3" >
                <p>${data[4].options[2]}</</p>
            </label>
        </div>
        <div class="option-wrapper">
            <label>
                <input type="radio" required name="q5" value="4" >
                <p>${data[4].options[3]}</</p>
            </label>
        </div>
    </section>   `
    html.innerHTML = htmlcontent
     
    
        }  
        
    const submit= document.getElementById('btn-submit');
    var scoreCount = document.getElementById('score-count');
    const questionOnes = document.querySelectorAll('input[name="q1"]');
    const questionTwos = document.querySelectorAll('input[name="q2"]'); 
    const questionThrees = document.querySelectorAll('input[name="q3"]'); 
    const questionFours = document.querySelectorAll('input[name="q4"]'); 
    const questionFives = document.querySelectorAll('input[name="q5"]'); 
    
submit.onclick= () =>{
    
    
    for(const questionOne of questionOnes){
        if(questionOne.checked){
            selected=questionOne.value
           if( selected == data[0].answer){
            console.log(questionOne.value)
            scoreCount.innerHTML++

           }
        } else {
            console.log("failed here")
        }
    };
    for(const questionTwo of questionTwos){
        if(questionTwo.checked){
            selected=questionTwo.value
           if( selected == data[1].answer){
            console.log(questionTwo.value)
            scoreCount.innerHTML++

           }
        } else {
            console.log("failed here")
        }
    };
    for(const questionThree of questionThrees){
        if(questionThree.checked){
            selected=questionThree.value
           if( selected == data[2].answer){
            console.log(questionThree.value)
            scoreCount.innerHTML++

           }
        } else {
            console.log("failed here")
        }
    };
    for(const questionFour of questionFours){
        if(questionFour.checked){
            selected=questionFour.value
           if( selected == data[3].answer){
            console.log(questionFour.value)
            scoreCount.innerHTML++

           }
        } else {
            console.log("failed here")
        }
    };

    for(const questionFive of questionFives){
        if(questionFive.checked){
            selected=questionFive.value
           if( selected == data[4].answer){
            console.log(questionFive.value)
            scoreCount.innerHTML++

           }
        } else {
            console.log("failed here")
        }

        
    };
    
    var scorefinal = scoreCount.innerHTML;
    document.getElementById("modal-wrapper").style.display = "block";
    // document.getElementById("result").appendChild(scorefinal);
    document.getElementById("result").innerHTML= scorefinal
       
}

    }
    
    )
  .catch (err => ('rejected', err.message));



  
