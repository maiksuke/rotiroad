// allikas pool Artur ja StackOverflow, pool chatGPT

document.addEventListener('DOMContentLoaded', function() {
    // Vali koik KKK esemed
    const faqItems = document.querySelectorAll('.kkk-ese');

    faqItems.forEach(item => {
        const question = item.querySelector('.kkk-kysimus');

        // Leia lahti olev kysimus ja sule see kui see pole see kysimus mida parajasti vajutatakse
        question.addEventListener('click', function() {
            const openAnswer = document.querySelector('.kkk-vastus.show');

            if (openAnswer && openAnswer !== question.nextElementSibling) {
                openAnswer.classList.remove('show');
                openAnswer.previousElementSibling.setAttribute('aria-expanded', 'false');
                openAnswer.style.maxHeight = null;
                openAnswer.previousElementSibling.classList.remove('active');
            }

            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Too vastus nahtavale
            question.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('show', !isExpanded);
            question.classList.toggle('active', !isExpanded);

            // Sujuvalt suurenda max suurust
            if (answer.classList.contains('show')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
