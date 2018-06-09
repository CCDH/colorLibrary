//
// Color Library by Bjorn Peters
//

function colorLibraryBjornPeters() {

    let settings = {
        headerColorSelector: '.header-color',
        mainColorSelector: '.main-color',
        accentColorSelector: '.accent-color'
    };

    let headerColor = '#303F9F';
    let mainColor = '#3F51B5';
    let accentColor = '#FF5252';

    let arraycolors = ["red", "pink", "purple", "deeppurple", "indigo", "blue", "lightblue", "cyan", "teal", "green", "lightgreen", "lime", "yellow", "amber", "orange", "deeporange", "brown", "grey", "bluegrey"];

    let headercolors = ["#D32F2F", "#C2185B", "#7B1FA2", "#512DA8", "#303F9F", "#1976D2", "#0288D1", "#0097A7", "#00796B", "#388E3C", "#689F38", "#AFB42B", "#FBC02D", "#FFA000", "#F57C00", "#E64A19", "#5D4037", "#616161", "#455A64"];
    let maincolors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"];
    let accentcolors = ["#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"];

    let headerElements = document.querySelectorAll(settings.headerColorSelector);
    let mainElements = document.querySelectorAll(settings.mainColorSelector);
    let accentElements = document.querySelectorAll(settings.accentColorSelector);

    //header colors
    function headerColorFunc() {
        for (let i = 0; i < headerElements.length; i++) {
            // We need this i later. So let's put it in a variable
            let ibeforeheader = i;
            for (let i = 0; i < arraycolors.length; i++) {
                //The classname should have "header-color color-of-your-chose" so we split "header-color" without the ",". The comma is removed because we used .join('')
                let getColor = headerElements[ibeforeheader].className.split("header-color ").join('');
                if (getColor === arraycolors[i]) {
                    headerColor = headercolors[i];
                    //we have two different i's so we use the ibefore i to get the right headerElements
                    headerElements[ibeforeheader].style.backgroundColor = headerColor;
                } else {
                    headerElements[ibeforeheader].style.backgroundColor = headerColor;
                }
            }
        }
    } headerColorFunc();

    //main colors
    function mainColorFunc() {
        for (let i = 0; i < mainElements.length; i++) {
            let ibeforemain = i;
            for (let i = 0; i < arraycolors.length; i++) {
                let getColor = mainElements[ibeforemain].className.split("main-color ").join('');
                if (getColor === arraycolors[i]) {
                    mainColor = maincolors[i];
                    mainElements[ibeforemain].style.backgroundColor = mainColor;
                } else {
                    mainElements[ibeforemain].style.backgroundColor = mainColor;
                }
            }
        }
    } mainColorFunc();

    //accent colors
    function accentColorFunc() {
        for (let i = 0; i < accentElements.length; i++) {
            let ibeforeaccent = i;
            for (let i = 0; i < arraycolors.length; i++) {
                let getColor = accentElements[ibeforeaccent].className.split("accent-color ").join('');
                if (getColor === arraycolors[i]) {
                    accentColor = accentcolors[i];
                    accentElements[ibeforeaccent].style.backgroundColor = accentColor;
                } else {
                    accentElements[ibeforeaccent].style.backgroundColor = accentColor;
                }
            }
        }
    } accentColorFunc();

}

colorLibraryBjornPeters();
