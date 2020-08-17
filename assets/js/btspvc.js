$(function() {
    $('#exampleModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('id');
        var content = button.data('content');
        var modal = $(this);
        modal.find('.modal-title').text('' + recipient);
        modal.find('.modal-body input').val(recipient);
        modal.find('.modal-body').text(content);
    });
});