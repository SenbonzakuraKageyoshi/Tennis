window.addEventListener('DOMContentLoaded', () => {
    const questionButtons = document.querySelectorAll('.questions-list__item__question__button');

    if(questionButtons){
        const onClickQuestionHandler = (target) => {
            const parent = target.closest('.questions-list__item');

            if(parent.className === 'questions-list__item active'){
                return parent.classList.remove('active')
            };

            if(document.querySelector('.questions-list__item.active')){
                document.querySelector('.questions-list__item.active').classList.remove('active');
            }
            
            parent.classList.toggle('active');
        }

        questionButtons.forEach((el) => el.addEventListener('click', (e) => onClickQuestionHandler(e.target)))
    };
});