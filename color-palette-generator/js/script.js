//function to get x colors between two colors
function getColors(color1, color2, steps) {
    var stepR, stepG, stepB;
    var stepR = ((color2.r - color1.r) / steps);
    var stepG = ((color2.g - color1.g) / steps);
    var stepB = ((color2.b - color1.b) / steps);
    var colors = [];
    for (var i = 0; i < steps; i++) {
        var color = {
            r: Math.round(color1.r + (stepR * i)),
            g: Math.round(color1.g + (stepG * i)),
            b: Math.round(color1.b + (stepB * i)),
        };
        colors.push(color);
    }
    return colors;
}

//convert hex to rgb and return r, g, b values separately
function hexToRgb(hex) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
    return {
        r: r,
        g: g,
        b: b
    };
}


$('#color-count').change(function() {
    $('#colors').empty();
    $('#gradient').css('background', 'linear-gradient(to right, ' + $('#color-picker-1').val() + ', ' + $('#color-picker-2').val() + ')');
    var steps = $('#color-count').val();
    var color1 = $('#color-picker-1').val();
    var color2 = $('#color-picker-2').val();
    var colors = getColors(hexToRgb(color1), hexToRgb(color2), steps);
    console.log(colors.length);
    console.log(colors);
    for (var i = 0; i < colors.length; i++) {
        $('#colors').append('<div class="color-box" style="background-color: rgb(' + colors[i].r + ', ' + colors[i].g + ', ' + colors[i].b + '); width:' + 100 / steps + '%;"></div>');
    }
});

$('#color-picker-1').change(function() {
    $('#gradient').css('background', 'linear-gradient(to right, ' + $('#color-picker-1').val() + ', ' + $('#color-picker-2').val() + ')');
    $('#colors').empty();
    var steps = $('#color-count').val();
    var color1 = $('#color-picker-1').val();
    var color2 = $('#color-picker-2').val();
    var colors = getColors(hexToRgb(color1), hexToRgb(color2), steps);
    console.log(colors.length);
    console.log(colors);
    for (var i = 0; i < colors.length; i++) {
        $('#colors').append('<div class="color-box" style="background-color: rgb(' + colors[i].r + ', ' + colors[i].g + ', ' + colors[i].b + '); width:' + 100 / steps + '%;"></div>');
    }
});
$('#color-picker-2').change(function() {
    $('#gradient').css('background', 'linear-gradient(to right, ' + $('#color-picker-1').val() + ', ' + $('#color-picker-2').val() + ')');
    $('#colors').empty();
    var steps = $('#color-count').val();
    var color1 = $('#color-picker-1').val();
    var color2 = $('#color-picker-2').val();
    var colors = getColors(hexToRgb(color1), hexToRgb(color2), steps);
    console.log(colors.length);
    console.log(colors);
    for (var i = 0; i < colors.length; i++) {
        $('#colors').append('<div class="color-box" style="background-color: rgb(' + colors[i].r + ', ' + colors[i].g + ', ' + colors[i].b + '); width:' + 100 / steps + '%;"></div>');
    }
});

//copy color of clicked color box to clipboard and show success message
$(document).on('click', '.color-box', function() {
    var color = $(this).css('background-color');
    var colorCode = color.replace(/\s/g, '').replace('rgb(', '').replace(')', '').split(',');
    var colorCode = '#' + rgbToHex(colorCode[0], colorCode[1], colorCode[2]);
    copyToClipboard(colorCode);
    $('#copy-message').show();
    setTimeout(function() {
        $('#copy-message').hide();
    }, 2000);
    console.log(colorCode);
});

function rgbToHex(r, g, b) {
    var hex = Number(r).toString(16);
    hex += Number(g).toString(16);
    hex += Number(b).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

$('#colors').empty();
$('#gradient').css('background', 'linear-gradient(to right, ' + $('#color-picker-1').val() + ', ' + $('#color-picker-2').val() + ')');
var steps = $('#color-count').val();
var color1 = $('#color-picker-1').val();
var color2 = $('#color-picker-2').val();
var colors = getColors(hexToRgb(color1), hexToRgb(color2), steps);
console.log(colors.length);
console.log(colors);
for (var i = 0; i < colors.length; i++) {
    $('#colors').append('<div class="color-box" style="background-color: rgb(' + colors[i].r + ', ' + colors[i].g + ', ' + colors[i].b + '); width:' + 100 / steps + '%;"></div>');
}