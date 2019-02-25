
class Quiz {
    constructor(name) {
        this.name = name;
        this.startTIme = new Date();
        
        //const title = 'asd';

    }
    fetchquestions() {
        const url = 'https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json';
        return fetch(url)
            .then(response => { return response.json() })
            .then(questions => { return questions });

    }
    renderQuestions(questions) {

        let ul = document.querySelector('ul'), counter;
        let totalLiElements = document.querySelectorAll('li');
        if (ul.hasChildNodes()) {
            while (ul.hasChildNodes()) {
                ul.removeChild(ul.firstChild);
            }
            /*  for (counter = totalLiElements.length; counter >= totalLiElements.length - questions.length; counter--)
                 ul.removeChild(ul.childNodes[counter]); */
        }

        //        setTimeout(() => {
        ul = document.querySelector('ul');
        for (let i = 0; i < questions.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = questions[i].title + '<br>' + questions[i].content;
            li.className = "questions";
            ul.appendChild(li);
            let select = document.createElement('select');
            for (let j = 0; j < questions[i].options.length; j++) {
                let option = document.createElement('option');
                option.innerHTML = questions[i].options[j].content;
                select.appendChild(option);
                li.appendChild(select);
                let br = document.createElement('br');
                li.appendChild(br);
            }
        }
        //      }, 500); //just to spend some time rendering questions
        this.timeTaken();
    }
    getScore(questions) {
        let correctAnswers = 0, trueFalse = 0;
        let selects = document.querySelectorAll('select');
        let ul = document.querySelector('ul'), counter;
        let totalLiElements = document.querySelectorAll('li');
        if (totalLiElements.length > 2) {
            for (counter = totalLiElements.length; counter >= totalLiElements.length - questions.length; counter--)
                ul.removeChild(ul.childNodes[counter]);
        }

        for (let i = 0; i < selects.length; i++) {

            for (let j = 0; j < selects[i].options.length; j++) {

                if (selects[i].value === questions[i].options[j].content && questions[i].options[j].correct === true) {
                    correctAnswers++; trueFalse = 1;
                }
            }
            if (trueFalse == 1) {
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                li.innerHTML = selects[i].value + ' is ' + 'Correct';
                ul.appendChild(li);
                trueFalse = 0;
            }
            else {
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                li.innerHTML = selects[i].value + ' is ' + 'Incorrect';
                ul.appendChild(li);
            }

            selects[i].disabled = true;
        }
        let li = document.createElement('li');
        li.innerHTML = "you have answered " + correctAnswers + '/' + selects.length + ' right';
        li.className = 'questions';
        ul.appendChild(li);
        alert('Time taken = ' + this.timeTaken() +' Secs');
        //this.timeTaken());
    }

    timeTaken() {
        const currentTime = new Date();
        return Math.floor((currentTime - this.startTIme)/1000);
        /*   let p = document.querySelector('p');
          p.innerHTML = 'your time starts now';
          let timespent = 0, s = 0, m = 0;
          return setInterval(() => {
              if (s % 60 == 0)
                  m = m + Math.floor(s / 60);
              s = Math.floor(s % 60);
              timespent = 'Time  ' + m + ' : ' + s;
              p.innerHTML = timespent;
              s++;
          }, 1000); */
        
    }
}
const quiz1 = new Quiz('Adil');
/* quiz1.fetchquestions().then((questions) => {
    quiz1.renderQuestions(questions);
}) */
const questions = quiz1.fetchquestions();

let btnResult = document.body.querySelector('button');
btnResult.addEventListener('click', function () { questions.then((questions) => { quiz1.getScore(questions) }) });

let radiobuttons = document.querySelectorAll('input');
radiobuttons[0].addEventListener('change', () => {
    quiz1.fetchquestions()
        .then((questions) => { quiz1.renderQuestions(questions.filter(question => question.difficulty == 'easy')) })
});

radiobuttons[1].addEventListener('change', () => {
    quiz1.fetchquestions()
        .then((questions) => { quiz1.renderQuestions(questions.filter(question => question.difficulty == 'hard')) })
});

radiobuttons[2].addEventListener('change', () => {
    quiz1.fetchquestions()
        .then((questions) => { quiz1.renderQuestions(questions) })
});

//radiobuttons[1].addEventListener('change', () => { console.log('hard'); });

