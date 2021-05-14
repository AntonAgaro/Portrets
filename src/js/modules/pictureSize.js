const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        //something.png => something-1.png Отрезаем 4 символа с конца строки и добавляем то, что нужно
        img.src = img.src.slice(0, -4) + '-1.png';
        //p:not(sizes-hit) - выбираем только те параграфы, у которых нет класса sizes-hit
        block.querySelectorAll('p:not(sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        //something-1.png => something.png  
        img.src = img.src.slice(0, -6) + '.png';
        //p:not(sizes-hit) - выбираем только те параграфы, у которых нет класса sizes-hit
        block.querySelectorAll('p:not(sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });

};

export default pictureSize;