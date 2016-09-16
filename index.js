/**
 * Created by knowthis on 16/9/16.
 */
$(function () {
    var data = [],
        inputIndex = 0;
    checkIndex(inputIndex);

    $(".input-border").on('keydown',function (e) {
        //console.log(e);
        if(e.keyCode == 8){
            $(e.target).removeClass('active');
            inputIndex -= 1;
            checkIndex(inputIndex)
        }
    })

    $(".input-border").on('input',function (e) {
        var targetItem = e.target;
        inputIndex = $(targetItem).index();
        var value = targetItem.innerText;
        $(targetItem).text('');
        if(/^\d{1}$/.test(value)){
            data.push(value);
            inputIndex +=1;
           $(targetItem).addClass('active');
            console.log('next input index',inputIndex)
            checkIndex(inputIndex)
        }else{
            console.log('no')
        }
        console.log(data)

    });
    function checkIndex(index) {
        var list = $(".input-border .item"),
            index_main = $('.index'),
            width = list.width();
       if(index != list.length && index >=0) {
           index_main.css({
               'width': width + 'px',
               'transform': 'translate(' + index * width + 'px ,0)'
           });
       }
        list.forEach(function (item, i) {
            if(i == index || i == list.length){
                console.log(i);
                $(item).attr('contenteditable',true);
                $(item).focus();
                //$(item).addClass('index')
            }else if(i !=index && i == list.length){
                $(item).attr('contenteditable',false);
                //$(item).removeClass('index')
            }
        })
    }
});