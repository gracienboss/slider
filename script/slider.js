$(document).ready(function(){
    var sliderHTML = "";
    var sliderData;
    var height ="500";



    initializeSlider();

    createSlider();
    render();


   
    function initializeSlider()
    {
        // load the html hook
        sliderData = $('#slider-container img');
        // if the hook is broken, throw error to stop the script
            if(sliderData.length == 0){
                throw "Erreur de selection"
            }
       $('#slider-container').remove();
    }

    // rajoute le contenu de la variable du body dans le html
     function render()
    {
        $('body').append(sliderHTML);
    }

    function createSlider()
    {
        sliderHTML += "<div id='slider-container' style='display:flex; flex-direction:row;overflow:hidden;'>" ;// qui va contenir toutes nos images

       // on va boucler sur toutes nos images
       for (var i = 0; i < sliderData.length; i++){
           var display = "";
            if (i == 0){
                display= "display:flex;justify-content:center;";
            }else{
                display="display:none;";
            }
          sliderHTML += "<div style='width:100%;height:500px;" + display + "'>";
          sliderHTML += " <img src= '" + $(sliderData[i])[0].src + "' style='height:" + height + "px;width:auto;'>";
          sliderHTML += "</div>";
          
       }
        sliderHTML += "</div>";
        sliderHTML += "<button data-action='left'><</button>";
        sliderHTML += "<button data-action='right'>></button>";
        
        

    }
});