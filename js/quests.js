"use strict";

$(() => {
    var complete = $('#complete');
    var inProgress = $('#in-progress');
    var failed = $('#failed');
    $(complete).click(() => {
        if( $(complete).hasClass("active")){
            $(complete).removeClass("active");
            $("li[data-mainquest='complete']").hide();
        } else {
            $(complete).addClass("active");
            $("li[data-mainquest='complete']").show();
        }
    });
    $(inProgress).click(() => {
        if( $(inProgress).hasClass("active")){
            $(inProgress).removeClass("active");
            $("li[data-mainquest='in-progress']").hide();
        } else {
            $(inProgress).addClass("active");
            $("li[data-mainquest='in-progress']").show();
        }
    });
    $(failed).click(() => {
        if( $(failed).hasClass("active")){
            $(failed).removeClass("active");
            $("li[data-mainquest='failed']").hide();
        } else {
            $(failed).addClass("active");
            $("li[data-mainquest='failed']").show();
        }
    });


})