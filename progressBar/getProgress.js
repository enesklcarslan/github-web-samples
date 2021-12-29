function getProgress(){
    var value = $("#progressValue").val();
    if(value>100){
        alert("Değer 100'den büyük olamaz!");
        return;
    }
    if(value<0){
        alert("Değer 0'dan küçük olamaz!");
        return;
    }
    let yuzdeDeger = value + "%";
    $("#progress1").width(yuzdeDeger);
    $("#progress1").text(yuzdeDeger);
}
$('#olustur').click(getProgress);



