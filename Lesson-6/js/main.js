$('button').on('click', function () {
    $('body').toggleClass('open');
});

function slideMin() {
    $(".search").toggle("slide", {direction: "right"});
}

