import {postData} from '../services/requests';

const drop = () => {
// * - срабатывают на элементе, который перетаскиваем
//drag *
//dragend *
//dragenter - объект над dropArea
//dragexit *
//dragleave - объект перетащили на пределы dropArea
//dragover - объект зависает над dropArea
//dragstart *
//drop - объект отправлен в dropArea
    const fileInputs = document.querySelectorAll('[name="upload"');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unHighLight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else if (item.id == 'drop') {
            item.closest('.file_upload').style.backgroundColor = "#f7e7e6";
        } 
        else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
        
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            if (input.id == 'drop') {
                console.log(input.files[0]);
                postData('assets/server.php', input.files[0])
                    .then(res => {
                        console.log(res);
                        input.previousElementSibling.textContent = 'Отправлено!';
                        setTimeout(() => {
                            input.previousElementSibling.textContent = 'Файл не выбран';
                        }, 3000);
                    });
            } 
            else {
                input.files = e.dataTransfer.files;
                let dots;
                const arr = input.files[0].name.split('.');
                arr[0].length > 6 ? dots = "..." : dots = '.';
                const name = arr[0].substring(0, 6) + dots + arr[1];
                input.previousElementSibling.textContent = name;

            }
    
        });
    });

};

export default drop;
