$('.filter-btn').on('click', function() {
    let type = $(this).attr('id')
    let boxes = $('curso')

    $('.cursosnavbtn').removeClass('active')
    $(this).addClass('active')

    if(type == 'hisayo') {
        eachBoxes('hisayo', boxes)
    } else if(type == 'eliza'){
        eachBoxes('eliza', boxes)
    } else if(type == 'klaus'){
        eachBoxes('klaus', boxes)
    } else {
        eachBoxes('all', boxes)
    }
})

function eachBoxes(type, boxes){

    if(type == 'all'){
        $(boxes).fadeIn()
    } else {
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow')
            } else {
                $(this).fadeIn()
            }
        })
    }
}