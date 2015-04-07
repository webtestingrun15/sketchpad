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
            var rgb = 'rgb(' + (Math.floor((256)*Math.random()) + 10) + ',' + (Math.floor((256)*Math.random()) + 10) + ',' + (Math.floor((256)*Math.random()) + 10) + ')';
            $(this).css('background', rgb);
            // Uncomment below to use default background
            // $(this).addClass('highlight');
        });
    }

    $('#clear').on('click', function(event) {
        event.preventDefault();
        $('.grid').remove();
        var width = prompt("Choose a width");
        var height = prompt("Choose a height");
        if (width > 65 || height > 65) {
            alert("Please choose numbers less than 64");
        } else if (isNaN(width) || isNaN(height)) {
            alert("Please only use numbers");
        } else {
            gridSquares(width, height);
            hoverGrid();
        }
    });

    gridSquares(16, 16);
    hoverGrid();

});
