import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
// import showMoreStyles from './modules/showMoreStyles';
import serverShowMoreStyles from './modules/serverShowMoreStyles';
import calc from './modules/calc';
import priceFormState from './modules/priceFormState';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let priceFormOnj = {};
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(priceFormOnj);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    // showMoreStyles('.button-styles', '.styles-2');
    serverShowMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    priceFormState(priceFormOnj);
    filter();
    pictureSize('.sizes-block');
});