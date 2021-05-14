const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        headers = document.querySelectorAll('.accordion-heading'),
        blocks = document.querySelectorAll('.accordion-block');

        //При клике на заголовок все остальные закрываются
        const hideContent = () => {
        btns.forEach(item => item.classList.remove('active-style'));
        blocks.forEach(item =>  {
            item.classList.remove('active-content')
            item.style.maxHeight = '0px';
        });
    }

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
        
            this.classList.toggle('active-style');
            //nextElementSibling обращаемся к следующему элементу
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });







    //На css анимациях
    //     blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;