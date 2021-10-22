const addIcon = document.querySelectorAll('.add-icon');
const subtractIcon = document.querySelectorAll('.subract-icon');
const questionBox = document.querySelectorAll('.question-box');
const hiddenInfo = document.querySelectorAll('.hidden-info');

addIcon.forEach((icon, iconIndex) => {

    icon.addEventListener('click', (me) => {
        questionBox.forEach((question, questionIndex) => {
            if ( iconIndex === questionIndex ) {
                question.style.height = 'max-content';
                question.style.transition = 'all 6s ease-out';
            }
        });

        hiddenInfo.forEach((info, infoIndex) => {
            if ( iconIndex === infoIndex ) {
                info.style.display = 'block';
                info.style.transition = 'all 6s ease-out';
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
                question.style.height = 'auto';
            }
        });

        hiddenInfo.forEach((info, infoIndex) => {
            if ( iconIndex === infoIndex ) {
                info.style.display = 'none';
            }
        });

        me.target.previousElementSibling.style.display = 'block';
        me.target.style.display = 'none';   
    });
})





