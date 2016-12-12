//Get value from .toggleone
//Get value from .togglethree



//Get value from slider and set .heading back color

$(function () {
    $('#togglethreeinput').on('change', function() {
        var brushColor = $('#togglethreeinput').val();
        $('.heading').css({'background-color': brushColor})
    });
});

//Get value from slider and set .heading roundness

$(function () {
    $('#toggletwoinput').on('change', function () {
        var brushRound = $('#toggletwoinput').val();
        $('.heading').css({'border-radius': brushRound + 'px'})
    });
});

//Get value from slider and set .tbldiv back color

$(function () {
    $('#togglethreeinput').on('change', function() {
        var brushColor = $('#togglethreeinput').val();
        $('.tbldiv').css({'background-color': brushColor})
    });
});

//Remove table

function removeTable () {
    $('.tbldiv').remove();
}

function getDivSize () {
    tbldiv_size = (100 / brushSize + '%');
    return tbldiv_size;
}

//Get value from brush size slider and add table

$(function addTable () {
        $('#toggleoneinput').on('change', function () {
            removeTable();
            brushSize = $('#toggleoneinput').val();
            for (var i = 1; i <= Math.pow(brushSize, 2); i++) {
                $('<div class="tbldiv"></div>').appendTo('.main-etch');
                getDivSize();
                $('.tbldiv').css({'width': tbldiv_size, 'height': tbldiv_size})
            }
        });
});