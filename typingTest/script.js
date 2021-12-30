function getWord(){
    let wordsArray = []
    var $sampleTextRow = $('#sample-text-row');
    $.ajax({
        url: 'https://random-word-api.herokuapp.com/word?number=8',
        type: 'GET',
        async: false,
        beforeSend: function() {
            //console.log("Getting words ");
        },
        success: function(result) {
            //console.log("Getting words successful ");
            for(let i=0; i<8;i++)
            {
                $('#sample-'+(i+1)).html(result[i]);
                wordsArray.push(result[i]);
            }
        },
        complete: function() {
        }
    });
    return wordsArray;
}
var wordsArray = getWord();//hem 7 kelime gösteriyor hem de 7 kelimenin arrayini döndürüyor
let gameStatus = 0;
$('#user-input').keyup(function(){//input focusluyken keypress olunca çalışır
    if(gameStatus==0){
        start();
        gameStatus = 1;
    }
    if(gameStatus==1)
    {
        submitWord();
    }
})
$('#restart-button').click(function(){
    gameOver();
    timeLeft = 60;
    $('#user-input').val('');
    wordsArray = getWord();
    $('#timeRemaining').html(timeLeft);
})

var timer;
var timeLeft = 60; // seconds

var wordsTyped = 0;
function submitWord(){
    var currentGoalWord = wordsArray[0];
    var input = $('#user-input').val();//.trim();
    if(input == currentGoalWord + " ")
    {
        wordsArray.shift();
        $('#sample-'+((wordsTyped%8)+1)).addClass('done');
        wordsTyped += 1;
        $('#score').html(wordsTyped);
        $('#user-input').val("");
        if(wordsArray.length == 0)
        {
            wordsArray = getWord();
            for (var i = 0; i < 8; i++) {
                $('#sample-'+(i+1)).removeClass('done');
            }
        }
    }
    if(input.length==0)
    {
        $('#user-input').removeClass('is-invalid').removeClass('is-valid');
    }
    else if(currentGoalWord.substring(0,input.length) == input){
        if($('#user-input').hasClass('is-invalid')){
            $('#user-input').removeClass('is-invalid').addClass('is-valid');
        }
        else{
            $('#user-input').addClass('is-valid');
        }
    }
    else{
        if($('#user-input').hasClass('is-valid')){
            $('#user-input').removeClass('is-valid').addClass('is-invalid');
        }
        else{
            $('#user-input').addClass('is-invalid');
        }
    }
}



// What to do when the timer runs out
function gameOver() {
    // This cancels the setInterval, so the updateTimer stops getting called
    clearInterval(timer);
    $('#restart-button').val('Try Again');
    gameStatus = 0;
    wordsTyped = 0;
    console.log("clearinterval çalıştı.");
}

function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
        $('#timeRemaining').html(timeLeft);
    else {
        gameOver();
    }
}

// The button has an on-click event handler that calls this
function start() {
    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    timer = setInterval(updateTimer, 1000);

    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves

    $('#restart-button').show();
}