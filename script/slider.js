$(document).ready(function(){
    initializeSlider();

    function initializeSlider()
    {
        // load the html hook
        var sliderData = $('#slider-container img');
        // if the hook is broken, throw error to stop the script
            if(sliderData.length == 0){
                throw "Erreur de selection"
            }
       $('#slider-container').remove();
    }
});