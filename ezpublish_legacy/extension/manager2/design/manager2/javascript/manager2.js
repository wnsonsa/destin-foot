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

function validFormRegister() {
    
}