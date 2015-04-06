$(function(){

    var $container = $('.container');

    for(var i=1; i<=16; i++){
        for(var j=1; j<=16; j++){
            var $grid = $("<div><div>").addClass('grid');
            $grid.appendTo($container);
        }
    }
});
