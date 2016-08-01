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

function validateRequired(form){
    /*var inputForm = $("#"+form).find('input[value=""]');
    if($('input[name="titrePhoto"]').val().length === 0 || $('input[name="photo"]').val().length === 0){
        return false;
    }
    $("#"+form).submit();
    return true;*/


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
                contentType: false
            } );

        } );
});

