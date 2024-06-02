const accordianWrapper = document.querySelector(".accordian");
const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote Hamlet?",
    answer: "William Shakespeare",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    id: 4,
    question: "How many states are there in the United States?",
    answer: "50",
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    id: 6,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
];

const createAccordianData = () => {
  accordianWrapper.innerHTML = data.map(
    (dataItem) => `
        <div class= "accordian_item">
        <div class= "accordian_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordian_content">
        <p>${dataItem.answer}</p>
        </div>
        </div>
        </div>
    `
  ).join(" ");
};

createAccordianData();

const getAccordianTitles = document.querySelectorAll(".accordian_title")


const event = getAccordianTitles.forEach((currentItem) => {
    currentItem.addEventListener( "click", (event) => {
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active')
        }else{
            let getCurrentAddedActiveClasses = document.querySelectorAll(".active")
            getCurrentAddedActiveClasses.forEach((currentActiveItem) =>{
                currentActiveItem.classList.remove("active")
            })
            currentItem.classList.add("active")
        }
    });
})