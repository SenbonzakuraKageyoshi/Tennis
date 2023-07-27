window.addEventListener('DOMContentLoaded', () => {
    const questionButtons = document.querySelectorAll('.questions-list__item__question__button');

    if(questionButtons){
        const onClickQuestionHandler = (target) => {
            if(document.querySelector('.questions-list__item.active')){
                document.querySelector('.questions-list__item.active').classList.remove('active');
            }

            const parent = target.closest('.questions-list__item');
            
            parent.classList.toggle('active');
        }

        questionButtons.forEach((el) => el.addEventListener('click', (e) => onClickQuestionHandler(e.target)))
    };
});