/* =========================================================
   PEDAGOGY MCQ MOCK TEST
   Created by Umasankar Pradhan

   Main features:
   - Student login
   - Password protection
   - 25 MCQs
   - 20 minute timer
   - Automatic result
   - Question-by-question answer analysis
   - Correct answer
   - Student answer
   - Detailed explanation
========================================================= */


/* =========================================================
   TEST SETTINGS
========================================================= */

// CHANGE YOUR PASSWORD HERE
const TEST_PASSWORD = "Pedagogy@2026";


// TEST TIME
const TEST_MINUTES = 20;


// TOTAL QUESTIONS
const TOTAL_QUESTIONS = 25;



/* =========================================================
   QUESTION DATABASE
========================================================= */

const questions = [

    {
        question:
            "Which principle emphasizes that learners construct knowledge through active experience?",

        options: [
            "Behaviorism",
            "Constructivism",
            "Maturationism",
            "Psychoanalysis"
        ],

        answer: 1,

        explanation:
            "Constructivism views learners as active participants who construct knowledge through experience, interaction and reflection."
    },


    {
        question:
            "The main purpose of formative assessment is to:",

        options: [
            "Rank students",
            "Improve ongoing learning",
            "Award certificates",
            "Replace teaching"
        ],

        answer: 1,

        explanation:
            "Formative assessment provides feedback during the learning process so that both teaching and learning can be improved."
    },


    {
        question:
            "Which approach gives learners opportunities to learn at their own pace?",

        options: [
            "Individualized instruction",
            "Lecture method only",
            "Dictation",
            "Punitive teaching"
        ],

        answer: 0,

        explanation:
            "Individualized instruction allows teaching and learning activities to be adjusted according to the needs and pace of individual learners."
    },


    {
        question:
            "A teacher asks open-ended questions mainly to encourage:",

        options: [
            "Memorization only",
            "Higher-order thinking",
            "Silence",
            "Copying"
        ],

        answer: 1,

        explanation:
            "Open-ended questions encourage learners to analyze, reason, explain, create and express their own ideas."
    },


    {
        question:
            "Inclusive education means:",

        options: [
            "Teaching only high achievers",
            "Separating learners by ability",
            "Providing learning opportunities for all learners",
            "Avoiding assessment"
        ],

        answer: 2,

        explanation:
            "Inclusive education aims to provide meaningful participation and learning opportunities for learners with diverse needs and abilities."
    },


    {
        question:
            "Which is an example of intrinsic motivation?",

        options: [
            "Studying for a prize",
            "Learning because the topic is interesting",
            "Studying to avoid punishment",
            "Studying for a gift"
        ],

        answer: 1,

        explanation:
            "Intrinsic motivation comes from internal interest, enjoyment or satisfaction rather than an external reward."
    },


    {
        question:
            "Scaffolding in teaching refers to:",

        options: [
            "Permanent teacher dependence",
            "Temporary support that is gradually removed",
            "Punishment",
            "Skipping difficult topics"
        ],

        answer: 1,

        explanation:
            "Scaffolding provides temporary guidance and support until learners develop enough understanding and skill to work independently."
    },


    {
        question:
            "A child-centered classroom gives importance to:",

        options: [
            "Teacher monologue",
            "Learner needs and participation",
            "Only textbooks",
            "Strict silence"
        ],

        answer: 1,

        explanation:
            "A child-centered classroom focuses on learner needs, interests, experiences and active participation."
    },


    {
        question:
            "Which learning domain is most closely related to attitudes and values?",

        options: [
            "Cognitive",
            "Affective",
            "Psychomotor",
            "Linguistic"
        ],

        answer: 1,

        explanation:
            "The affective domain deals with feelings, attitudes, values, interests and emotional responses."
    },


    {
        question:
            "Diagnostic assessment is mainly used to:",

        options: [
            "Identify learning difficulties and prior knowledge",
            "Give final grades",
            "Select school uniforms",
            "Replace classroom teaching"
        ],

        answer: 0,

        explanation:
            "Diagnostic assessment helps a teacher identify learners' prior knowledge, strengths, weaknesses and specific learning difficulties."
    },


    {
        question:
            "Peer learning primarily involves:",

        options: [
            "Students learning with and from one another",
            "Only teacher lectures",
            "No interaction",
            "Individual exams only"
        ],

        answer: 0,

        explanation:
            "Peer learning allows students to support one another by discussing ideas, explaining concepts and solving problems together."
    },


    {
        question:
            "Which is a characteristic of effective feedback?",

        options: [
            "It is vague",
            "It focuses only on mistakes",
            "It is specific and actionable",
            "It is always delayed"
        ],

        answer: 2,

        explanation:
            "Effective feedback is specific, meaningful and actionable. It tells learners what they did well and what they can improve."
    },


    {
        question:
            "Bloom's taxonomy is commonly used to classify:",

        options: [
            "School buildings",
            "Learning objectives",
            "Attendance registers",
            "School fees"
        ],

        answer: 1,

        explanation:
            "Bloom's taxonomy is used to classify educational and cognitive learning objectives according to different levels of thinking."
    },


    {
        question:
            "Learning by doing is strongly associated with:",

        options: [
            "Active learning",
            "Passive learning",
            "Rote-only learning",
            "No learning"
        ],

        answer: 0,

        explanation:
            "Learning by doing involves learners actively participating in activities, practice, investigation and application of knowledge."
    },


    {
        question:
            "Which classroom practice best supports individual differences?",

        options: [
            "One identical task for everyone",
            "Differentiated instruction",
            "Ignoring learner needs",
            "Only whole-class lecture"
        ],

        answer: 1,

        explanation:
            "Differentiated instruction adapts teaching, activities or assessment according to learners' readiness, interests and needs."
    },


    {
        question:
            "A rubric is useful for:",

        options: [
            "Measuring internet speed",
            "Guiding and assessing performance",
            "Taking attendance only",
            "Scheduling buses"
        ],

        answer: 1,

        explanation:
            "A rubric provides assessment criteria and performance levels, helping teachers assess work more clearly and consistently."
    },


    {
        question:
            "Remedial teaching is intended to:",

        options: [
            "Address identified learning gaps",
            "Increase homework without purpose",
            "Punish weak learners",
            "Replace all assessments"
        ],

        answer: 0,

        explanation:
            "Remedial teaching provides targeted instruction to help learners overcome specific learning difficulties or gaps."
    },


    {
        question:
            "Which classroom environment is most conducive to questioning?",

        options: [
            "Fear-based",
            "Supportive and respectful",
            "Punitive",
            "Silent-only"
        ],

        answer: 1,

        explanation:
            "Learners are more comfortable asking questions when the classroom is supportive, respectful and psychologically safe."
    },


    {
        question:
            "The psychomotor domain relates mainly to:",

        options: [
            "Physical skills and coordinated actions",
            "Values only",
            "Memory only",
            "Emotions only"
        ],

        answer: 0,

        explanation:
            "The psychomotor domain relates to physical movement, coordination and performance of practical skills."
    },


    {
        question:
            "Cooperative learning is characterized by:",

        options: [
            "Positive interdependence and group work",
            "Competition only",
            "No communication",
            "Individual isolation"
        ],

        answer: 0,

        explanation:
            "Cooperative learning involves structured group work where learners depend on and support one another to achieve learning goals."
    },


    {
        question:
            "A portfolio is best described as:",

        options: [
            "A collection showing learner work and progress",
            "A single final exam",
            "A timetable",
            "A punishment record"
        ],

        answer: 0,

        explanation:
            "A portfolio is a purposeful collection of learner work that demonstrates learning, progress, achievement and development over time."
    },


    {
        question:
            "Which method begins with a problem and encourages learners to investigate solutions?",

        options: [
            "Problem-based learning",
            "Dictation",
            "Copy writing",
            "Silent reading only"
        ],

        answer: 0,

        explanation:
            "Problem-based learning organizes learning around meaningful problems and encourages learners to investigate, reason and develop solutions."
    },


    {
        question:
            "Metacognition refers to:",

        options: [
            "Thinking about one's own thinking and learning",
            "Physical exercise",
            "Memorizing without reflection",
            "Teacher attendance"
        ],

        answer: 0,

        explanation:
            "Metacognition means being aware of and regulating one's own thinking, learning strategies and understanding."
    },


    {
        question:
            "The best use of a teaching aid is to:",

        options: [
            "Decorate the classroom",
            "Support understanding of learning objectives",
            "Replace the teacher completely",
            "Make lessons longer"
        ],

        answer: 1,

        explanation:
            "Teaching aids should be selected to support the learning objectives and make important concepts easier to understand."
    },


    {
        question:
            "A good learning objective should be:",

        options: [
            "Unclear",
            "Measurable and specific",
            "Impossible to assess",
            "Unrelated to the lesson"
        ],

        answer: 1,

        explanation:
            "A good learning objective should be clear, specific and measurable so that learning can be appropriately planned and assessed."
    }

];



/* =========================================================
   VARIABLES
========================================================= */

let currentQuestion = 0;

let studentAnswers =
    new Array(questions.length).fill(null);

let studentName = "";

let timeRemaining =
    TEST_MINUTES * 60;

let timerInterval = null;



/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active-page");

        });


    const selectedPage =
        document.getElementById(pageId);


    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    document
        .querySelectorAll(".nav-link")
        .forEach(function(button) {

            button.classList.remove("active");

        });


    const navButton =
        document.querySelector(
            '.nav-link[data-page="' + pageId + '"]'
        );


    if (navButton) {

        navButton.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================================================
   OPEN LOGIN
========================================================= */

function openLogin() {

    const nameInput =
        document.getElementById("studentName");

    const passwordInput =
        document.getElementById("studentPassword");

    const error =
        document.getElementById("loginError");


    if (nameInput) {
        nameInput.value = "";
    }


    if (passwordInput) {
        passwordInput.value = "";
    }


    if (error) {
        error.textContent = "";
    }


    showPage("login");
}



/* =========================================================
   PASSWORD SHOW / HIDE
========================================================= */

function togglePassword() {

    const passwordInput =
        document.getElementById("studentPassword");

    const button =
        document.querySelector(".password-box button");


    if (!passwordInput) {
        return;
    }


    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        if (button) {
            button.textContent = "Hide";
        }

    } else {

        passwordInput.type = "password";

        if (button) {
            button.textContent = "Show";
        }

    }
}



/* =========================================================
   LOGIN FORM
========================================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("studentName")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("studentPassword")
                    .value;


            const error =
                document.getElementById("loginError");


            /* NAME CHECK */

            if (!name) {

                error.textContent =
                    "Please enter student name.";

                return;
            }


            /* PASSWORD CHECK */

            if (password !== TEST_PASSWORD) {

                error.textContent =
                    "Incorrect password. Please enter the correct password.";

                return;
            }


            /* LOGIN SUCCESS */

            studentName = name;


            startTest();

        }
    );

}



/* =========================================================
   START TEST
========================================================= */

function startTest() {

    currentQuestion = 0;


    studentAnswers =
        new Array(questions.length).fill(null);


    timeRemaining =
        TEST_MINUTES * 60;


    const welcomeStudent =
        document.getElementById("welcomeStudent");


    if (welcomeStudent) {

        welcomeStudent.textContent =
            "Welcome, " + studentName;

    }


    showPage("exam");


    renderQuestion();


    clearInterval(timerInterval);


    timerInterval =
        setInterval(updateTimer, 1000);


    updateTimer();
}



/* =========================================================
   TIMER
========================================================= */

function updateTimer() {

    const timer =
        document.getElementById("timer");


    if (!timer) {
        return;
    }


    const minutes =
        Math.floor(timeRemaining / 60)
            .toString()
            .padStart(2, "0");


    const seconds =
        (timeRemaining % 60)
            .toString()
            .padStart(2, "0");


    timer.textContent =
        minutes + ":" + seconds;


    if (timeRemaining <= 60) {

        timer.style.color =
            "#d04438";

    }


    if (timeRemaining <= 0) {

        clearInterval(timerInterval);

        finishTest(true);

        return;

    }


    timeRemaining--;

}



/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    const area =
        document.getElementById("questionArea");


    if (!area) {
        return;
    }


    /* QUESTION COUNTER */

    const questionCounter =
        document.getElementById("questionCounter");


    if (questionCounter) {

        questionCounter.textContent =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;

    }


    /* ANSWERED COUNT */

    const answeredCount =
        document.getElementById("answeredCount");


    const answered =
        studentAnswers.filter(
            function(answer) {

                return answer !== null;

            }
        ).length;


    if (answeredCount) {

        answeredCount.textContent =
            answered + " answered";

    }


    /* PROGRESS */

    const progressBar =
        document.getElementById("progressBar");


    if (progressBar) {

        const progress =
            ((currentQuestion + 1) /
                questions.length) * 100;


        progressBar.style.width =
            progress + "%";

    }


    /* CREATE QUESTION */

    let optionsHTML = "";


    question.options.forEach(
        function(option, index) {

            const selected =
                studentAnswers[currentQuestion] === index;


            optionsHTML += `

                <label class="option ${selected ? "selected" : ""}">

                    <input
                        type="radio"
                        name="answer"
                        value="${index}"
                        ${selected ? "checked" : ""}
                    >

                    <span>

                        <b>
                            ${String.fromCharCode(65 + index)}.
                        </b>

                        ${option}

                    </span>

                </label>

            `;

        }
    );


    area.innerHTML = `

        <div class="question-number">

            QUESTION ${currentQuestion + 1}

        </div>


        <h3>

            ${question.question}

        </h3>


        <div class="options">

            ${optionsHTML}

        </div>

    `;


    /* RADIO EVENTS */

    area
        .querySelectorAll(
            'input[name="answer"]'
        )
        .forEach(
            function(input) {

                input.addEventListener(
                    "change",
                    function() {

                        studentAnswers[currentQuestion] =
                            Number(input.value);


                        renderQuestion();

                    }
                );

            }
        );


    /* PREVIOUS BUTTON */

    const previousButton =
        document.getElementById("prevBtn");


    if (previousButton) {

        previousButton.disabled =
            currentQuestion === 0;


        previousButton.style.opacity =
            currentQuestion === 0
                ? "0.5"
                : "1";

    }


    /* NEXT BUTTON */

    const nextButton =
        document.getElementById("nextBtn");


    if (nextButton) {

        if (
            currentQuestion ===
            questions.length - 1
        ) {

            nextButton.textContent =
                "Submit Test ✓";

        } else {

            nextButton.textContent =
                "Next →";

        }

    }

}



/* =========================================================
   PREVIOUS QUESTION
========================================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

    }

}



/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

    } else {

        finishTest(false);

    }

}



/* =========================================================
   FINISH TEST
========================================================= */

function finishTest(timeUp) {

    clearInterval(timerInterval);


    let correct = 0;


    studentAnswers.forEach(
        function(answer, index) {

            if (
                answer ===
                questions[index].answer
            ) {

                correct++;

            }

        }
    );


    const wrong =
        questions.length - correct;


    const percentage =
        Math.round(
            (correct / questions.length) * 100
        );


    /* RESULT NAME */

    const resultName =
        document.getElementById("resultName");


    if (resultName) {

        resultName.textContent =
            studentName;

    }


    /* SCORE */

    const score =
        document.getElementById("score");


    if (score) {

        score.textContent =
            correct;

    }


    /* CORRECT */

    const correctCount =
        document.getElementById("correctCount");


    if (correctCount) {

        correctCount.textContent =
            correct;

    }


    /* WRONG */

    const wrongCount =
        document.getElementById("wrongCount");


    if (wrongCount) {

        wrongCount.textContent =
            wrong;

    }


    /* PERCENTAGE */

    const percentCount =
        document.getElementById("percentCount");


    if (percentCount) {

        percentCount.textContent =
            percentage + "%";

    }


    /* MESSAGE */

    const message =
        document.getElementById("resultMessage");


    if (message) {

        if (percentage >= 80) {

            message.textContent =
                "Outstanding performance! Keep up your excellent preparation.";

        } else if (percentage >= 60) {

            message.textContent =
                "Good attempt! Review the questions you missed and improve further.";

        } else if (percentage >= 40) {

            message.textContent =
                "Keep practicing. Regular mock tests and revision will improve your performance.";

        } else {

            message.textContent =
                "Don't give up. Revise the concepts carefully and attempt the test again.";

        }

        if (timeUp) {

            message.textContent +=
                " The test was automatically submitted because the time ended.";

        }

    }


    /* CREATE ANALYSIS */

    createAnalysis();


    /* SHOW RESULT */

    showPage("result");

}



/* =========================================================
   CREATE QUESTION-BY-QUESTION ANALYSIS
========================================================= */

function createAnalysis() {

    const analysisArea =
        document.getElementById("analysisArea");


    if (!analysisArea) {
        return;
    }


    let html = "";


    questions.forEach(
        function(question, index) {

            const studentAnswer =
                studentAnswers[index];


            const correctAnswer =
                question.answer;


            const isCorrect =
                studentAnswer === correctAnswer;


            const statusClass =
                isCorrect
                    ? "correct"
                    : "wrong";


            const statusText =
                isCorrect
                    ? "✓ CORRECT"
                    : "✕ WRONG";


            let studentAnswerText;


            if (studentAnswer === null) {

                studentAnswerText =
                    "Not Answered";

            } else {

                studentAnswerText =
                    String.fromCharCode(
                        65 + studentAnswer
                    ) +
                    ". " +
                    question.options[studentAnswer];

            }


            const correctAnswerText =
                String.fromCharCode(
                    65 + correctAnswer
                ) +
                ". " +
                question.options[correctAnswer];


            html += `

                <div class="analysis-item ${statusClass}">

                    <div class="analysis-status ${statusClass}">

                        ${statusText}

                    </div>


                    <div class="analysis-question-number">

                        QUESTION ${index + 1}

                    </div>


                    <div class="analysis-question">

                        ${question.question}

                    </div>


                    <div class="answer-row student">

                        <span class="answer-label">
                            Your Answer:
                        </span>

                        ${studentAnswerText}

                    </div>


                    <div class="answer-row correct-answer">

                        <span class="answer-label">
                            Correct Answer:
                        </span>

                        ${correctAnswerText}

                    </div>


                    <div class="explanation-box">

                        <strong>
                            💡 Explanation
                        </strong>

                        ${question.explanation}

                    </div>

                </div>

            `;

        }
    );


    analysisArea.innerHTML =
        html;

}



/* =========================================================
   PREVENT ACCIDENTAL PAGE REFRESH DURING TEST
========================================================= */

window.addEventListener(
    "beforeunload",
    function(event) {

        const examPage =
            document.getElementById("exam");


        if (
            examPage &&
            examPage.classList.contains(
                "active-page"
            )
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);