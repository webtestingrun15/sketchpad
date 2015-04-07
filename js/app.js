$(function() {

    var $container = $('.container');

    function gridSquares(w, h) {
        for (var i = 1; i <= w; i++) {
            for (var j = 1; j <= h; j++) {
                var $grid = $("<div><div>").addClass('grid');
                $grid.appendTo($container);
            }
        }
    }

    function hoverGrid() {
        $('.grid').on('mouseenter', function(event) {
            event.preventDefault();
            $(this).addClass('highlight');
        });
    }

    $('#clear').on('click', function(event) {
        event.preventDefault();
        $('.grid').remove();
        var width = prompt("Choose a width");
        var height = prompt("Choose a height");
        gridSquares(width, height);
        hoverGrid();
    });

    gridSquares(16, 16);
    hoverGrid();

});
