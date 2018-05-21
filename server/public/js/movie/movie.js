$(function(){
    $('.table-striped .remove').click(function(e){
        var target = $(e.target)
        var id = target.data('id')
        var tr = $('.item-id-' + id)

        $.ajax({
            type:'delete',
            url:'/movie/list',
            data:{
                id: id
            }
        })
        .done(function(response){
            console.log(response)
            if (response.statuscode == 200){
                if(tr.length >0){
                    tr.remove()
                }
            }
        })
    })
})
