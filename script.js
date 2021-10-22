const addIcon = document.querySelectorAll('.add-icon');
const subtractIcon = document.querySelectorAll('.subract-icon');
const questionBox = document.querySelectorAll('.question-box');
const hiddenInfo = document.querySelectorAll('.hidden-info');

addIcon.forEach((icon, iconIndex) => {

    icon.addEventListener('click', (me) => {
        questionBox.forEach((question, questionIndex) => {
            if ( iconIndex === questionIndex ) {
                question.classList.add('expander');
            }
        });

        me.target.nextElementSibling.style.display = 'block';
        me.target.style.display = 'none';
    });
});


subtractIcon.forEach((icon, iconIndex) => {

    icon.addEventListener('click', (me) => {
        questionBox.forEach((question, questionIndex) => {
            if ( iconIndex === questionIndex ) {
                question.classList.remove('expander');
            }
        });

        me.target.previousElementSibling.style.display = 'block';
        me.target.style.display = 'none';   
    });
});





