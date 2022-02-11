$('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine').click(function() {
    if ($('.screen-text>p').html() == 0 && $('.screen-text>p').html() != '0.') {
        $('.screen-text>p').html($(this).html());
    } else {
        $('.screen-text>p').html($('.screen-text>p').html() + $(this).html());
    }
});
$('#clear').click(function() {
    $('.screen-text>p').html(0);
});
$('#backspace').click(function() {
    if ($('.screen-text>p').html().length > 1) {
        $('.screen-text>p').html($('.screen-text>p').html().slice(0, -1));
    } else {
        $('.screen-text>p').html(0);
    }

});
$('#add').click(function() {
    if ($('.screen-text>p').html() != 0) {
        $('.screen-text>p').html($('.screen-text>p').html() + '+');
    }
});
$('#subtract').click(function() {
    if ($('.screen-text>p').html() != 0) {
        $('.screen-text>p').html($('.screen-text>p').html() + '-');
    }
});
$('#multiply').click(function() {
    if ($('.screen-text>p').html() != 0) {
        $('.screen-text>p').html($('.screen-text>p').html() + '*');
    }
});
$('#divide').click(function() {
    if ($('.screen-text>p').html() != 0) {
        $('.screen-text>p').html($('.screen-text>p').html() + '/');
    }
});
$('#equals').click(function() {
    if ($('.screen-text>p').html() != 0) {
        $('.screen-text>p').html(eval($('.screen-text>p').html()));
    }
});
$('#decimal').click(function() {
    $('.screen-text>p').html($('.screen-text>p').html() + '.');
});