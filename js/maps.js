"use strict";
$(function(){

    loadMap("fullmap");

    $('#maps a').click(function(ev){
        ev.preventDefault();
        let href = ($(this).attr("href")).substring(1);
        loadMap( href );
    })
});


// what a mess...
function loadMap( mapName ){
    $('#map-areas ul').children().remove();

    $.getJSON("../quest-for-calatia/mapdata/" + mapName + ".json", function(data){
        $('#map h4').text( data.name );
        let img = "../images/calatia/maps/" + data.image;
        $('#map a').attr("href", img ).attr("alt", "Map of " + data.name );
        $('#map img').attr("src", img );
        $('#map-description').text( data.description );
        $('#map-areas').show();
        $.each( data.areas , function(i){
            let li = $('<li></li>');
            $(li).html( "<b>" + data.areas[i].name + "</b><br>" + data.areas[i].text )
            $('#map-areas ul').append( li );
        })
    })
}