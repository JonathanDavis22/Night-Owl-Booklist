$(document).on('click', '.readButton', function() {
    $('#readBooks').append($(this).parent().detach());
    $(this).removeClass('readButton').addClass('btn-danger trashButton');
    $(this).html('<span class="fa fa-trash"></span>');

    $.ajax({
        url: '/api/books/' + $(this).attr('data-id'),
        type: 'PUT',
    })
    console.log('Read!');

});

$(document).on('click', '.trashButton', function() {
    $(this).parent().detach();
    
    $.ajax({
        url: 'api/books/' + $(this).attr('data-id'),
        type: 'DELETE'
        })
    console.log('Deleted!');

});