window.addEventListener('DOMContentLoaded', () => {
    const questionButtons = document.querySelectorAll('.questions-list__item__question__button');
    const courseSections = document.querySelectorAll('.section-courses');

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

    if(courseSections){
        const getUniqueCourseCategories = (courses) => {
            const arr = [];
    
            courses.forEach((el) => {
                const category = el.getAttribute('data-category')
                if(!arr.includes(category)){
                    arr.push(category)
                }
            });
    
            return arr;
        };
    
        const generateHTML = (category) => {
            const button = document.createElement('button');
            button.style.color = 'var(--green)';
            button.className = 'courses-tags__item';
            button.innerHTML = category;
            button.setAttribute('data-category', category)
    
            return button;
        };
    
        const generateCoursesFilter = () => {
            courseSections.forEach((el) => {
                const courses = el.querySelectorAll('.course-item');
                const filter = el.querySelector('.courses-tags');
    
                const uniqueCategories = getUniqueCourseCategories(courses);
    
                uniqueCategories.forEach((el) => filter.insertAdjacentElement('beforeend', generateHTML(el)))
            });
        };
    
        generateCoursesFilter();
    
        const courseFilters = document.querySelectorAll('.courses-tags__item');
    
        const disableCourseFilter = (target) => {
            const parent = target.closest('.section-courses');
            const slides = parent.querySelectorAll('.swiper-slide');
            
            slides.forEach((el) => {
                el.classList.remove('hidden');
            })
        };
    
        const filterCourses = (target) => {
            const parent = target.closest('.section-courses');
            const courses = parent.querySelectorAll('.course-item');
            
            parent.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px, 0px, 0px)'
    
            if(target.getAttribute('data-category') === ''){
                return disableCourseFilter(target);
            }
    
            courses.forEach((el) => {
                if(target.getAttribute('data-category') !== el.getAttribute('data-category')){
                    el.closest('.swiper-slide').classList.add('hidden');
                }else{
                    el.closest('.swiper-slide').classList.remove('hidden');
                }
            })
        };
    
        courseFilters.forEach(el => el.addEventListener('click', (e) => filterCourses(e.target)))
    };

    const menuButton = document.querySelector('.menu__button'),
    menu = document.querySelector('.header-bottom');

    const menuHandler = () => menu.classList.toggle('active');

    menuButton.addEventListener('click', menuHandler);
});