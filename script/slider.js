	$(document).ready(function() {

    var sliderHtml = "";
    var sliderData;
    var height = 500;

    initializeSlider();
    createSlider();
    render();

    function left() {
        
        var prevImage = $('#selected').prev()[0];
        if(prevImage == undefined) {
            var prevImage = $('#slider-container div').last()[0];
        }
        $('#selected').css('display', 'none');
        $('#selected').removeAttr('id');
        
        $(prevImage).css('display', 'flex').css('justify-content', 'center');
        $(prevImage).attr('id', 'selected');

    }

    function right() {
        var nextImage = $('#selected').next()[0];
        if(nextImage == undefined) {
            var nextImage = $('#slider-container div').first()[0];
        }
        $('#selected').css('display', 'none');
        $('#selected').removeAttr('id');
        
        $(nextImage).css('display', 'flex').css('justify-content', 'center');
        $(nextImage).attr('id', 'selected');
    }

    function createSlider() {
        sliderHtml += "<div id='slider-container' style='display:flex;flex-direction:row;overflow:hidden;background-color:black;height:" + height + "px'>"
        for (var i = 0; i < sliderData.length; i++) {
            var display;
            var id = "";
            if(i == 0) {
                display = "display:flex;justify-content:center;";
                id = "selected";
            } else {
                display = "display:none";
            }
            sliderHtml += "<div id='" + id + "' style='width:100%;height:500px;" +  display + "'>";
            sliderHtml += "<img src='" + $(sliderData[i])[0].src + "' style='height:" + height + "px;width:auto;'>";
            sliderHtml += "</div>"
        }
        

        sliderHtml += "</div>"

        
        sliderHtml += "<div id='button' style='display:flex;justify-content:space-between;position:fixed;top:" + (height - 64)/2 + "px;width:99%'>"
        sliderHtml += "<button style='color:white;background-color:transparent;border:none;font-size:50px;' data-action='left'><</button>";
        sliderHtml += "<button style='color:white;background-color:transparent;border:none;font-size:50px;' data-action='right'>></button>";
        sliderHtml += "</div>"

        $("body").on('click', "button[data-action='left']", left);
        $("body").on('click', "button[data-action='right']", right);
    }

    function initializeSlider() {
        // Load the html hook
        sliderData = $('#slider-container img');

        // If the hook is broken, throw error to stop script
        if(sliderData.length == 0) {
            throw "Erreur de selection";
        }
        $('#slider-container').remove();
    }
    
    function render() {
        $('body').append(sliderHtml);
    }
});