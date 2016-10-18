/**
 * Created by wnsonsa on 25/05/16.
 */

$(document).ready(function(){

    counter = 0;
    $('#addXP').on('click', function(e){
        e.preventDefault();
        counter ++;
        cloned = $('.toClone').first().clone();
        cloned.find('input').each(function(){
            names = $(this).attr('name').split('_');
            console.log(names[0]);
            $(this).attr('name', names[0] + '_' + counter);
            $(this).attr('id', names[0] + '_' + counter);
            $(this).attr('value', '');

        });
        cloned.find('select').each(function(){
            names = $(this).attr('name').split('_');
            console.log(names[0]);
            $(this).attr('name', names[0] + '_' + counter);
            $(this).attr('id', names[0] + '_' + counter);
            $(this).prop('selected', function() {
                return this.defaultSelected;
            });
        });
        // path to parent element.
        $(this).before(cloned);
        //cloned.before($(this).parent());
    });
});

function plusVue(classViewed,originUserId,viewedObjectId) {
    if ('' != classViewed && '' != originUserId && '' != viewedObjectId) {
        $.ajax({
            url: '/ajax/plus-vue/' + classViewed + '/' + originUserId + '/' + viewedObjectId
        })
    }
    
}

$(document).ready(function(){
    $( '#formPhoto' )
        .submit( function( e ) {
            e.preventDefault();
                $.ajax( {
                    url: '/add/photo',
                    type: 'POST',
                    data: new FormData( this ),
                    processData: false,
                    contentType: false,
                    timeout: 30000,
                    async: false,
                } )
            .done(function (data) {
                response = $.parseJSON(data);
                //console.log(response);
                if(!response.valid){
                    $('.alert').hide();
                    $('.alert-danger').find('strong').html(response.error);
                    $('.alert-danger').show();
                }
                else{
                    $('.alert').hide();
                    $('.alert-success').find('strong').html(response.success);
                    $('.alert-success').show();
                    setTimeout(function(){ $('#addPhoto').modal('hide'); },2000)
                }
            })
            ;

        } );
});

