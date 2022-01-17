function formatFactory(html) {
    function parse(html, tab = 0) {
        var tab;
        var html = $.parseHTML(html);
        var formatHtml = new String();

        function setTabs () {
            var tabs = new String();

            for (i=0; i < tab; i++){
                tabs += '\t';
            }
            return tabs;
        };


        $.each( html, function( i, el ) {
            if (el.nodeName == '#text') {
                if (($(el).text().trim()).length) {
                    formatHtml += setTabs() + $(el).text().trim() + '\n';
                }
            } else {
                var innerHTML = $(el).html().trim();
                $(el).html(innerHTML.replace('\n', '').replace(/ +(?= )/g, ''));


                if ($(el).children().length) {
                    $(el).html('\n' + parse(innerHTML, (tab + 1)) + setTabs());
                    var outerHTML = $(el).prop('outerHTML').trim();
                    formatHtml += setTabs() + outerHTML + '\n';

                } else {
                    var outerHTML = $(el).prop('outerHTML').trim();
                    formatHtml += setTabs() + outerHTML + '\n';
                }
            }
        });

        return formatHtml;
    };

    return parse(html.replace(/(\r\n|\n|\r)/gm," ").replace(/ +(?= )/g,''));
};

var rowCount = 2;
var colCount = 2;

$('#addrow').click(function(){
    var newRow = $("<tr id=\"row"+(rowCount+1)+"\">\n" +
        "        </tr>");
    var newCols = $("");
    for(let i=0; i<colCount; i++){
        newRow.append("<td id=\""+(rowCount+1)+"x"+(i+1)+"\">\n" +
            "                "+(rowCount+1)+"x"+(i+1)+"\n" +
            "            </td>")
    };
    $('table').append(newRow);
    rowCount++;
});
$('#deleterow').click(function(){
    $('tr').last().remove();
    if(rowCount>0)
        rowCount--;
});

$('#addcol').click(function(){
    for(let i=0; i<rowCount; i++){
        let row = '#row'+(i+1);
        let colTemplate= $('<td id='+(i+1)+'x'+(colCount+1)+'>\n' +
            '                '+(i+1)+'x'+(colCount+1)+'\n' +
            '            </td>');
        $(row).append(colTemplate);
    }
    colCount++;
});
$('#removecol').click(function(){
   for(let i=0; i<rowCount;i++){
       let col = '#'+(i+1)+'x'+(colCount);
       $(col).remove();
   }
   colCount--;
});



$('#generate-button').click(function(){
    var tablo = $('table');
    tablo.removeAttr('contenteditable');
    var htmlKodu = $('table')[0].outerHTML;
    tablo.attr('contenteditable', 'true');
    htmlKodu = formatFactory(htmlKodu);

    $('textarea').html(htmlKodu);
})