(function() {
    var $content = $('#share-options').detach();

    $('#share').on('click', function() {
        MSFIDOCredentialAssertion.open({content: $content, width:340, height:300});
    });
});