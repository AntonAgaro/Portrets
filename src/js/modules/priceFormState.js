const priceFormState = (state) => {
    const size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        totalPrice = document.querySelector('.calc-price');

    
    function bindActionToElems(event, elem, prop) {
        elem.addEventListener(event, () => {
            switch (elem.nodeName) {
                case 'SELECT' :
                    state[prop] = elem.value;
                    break;

                case 'INPUT' :
                    state[prop] = elem.value;
                    break;
            }
            console.log(state);
        });
    }

    bindActionToElems('change', size, 'size');
    bindActionToElems('change', material, 'material');
    bindActionToElems('change', options, 'options');
    bindActionToElems('input', promocode, 'promocode');
};

export default priceFormState;