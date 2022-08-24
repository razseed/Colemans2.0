$('.cleaningservices').each(function(index, element) {

    setTimeout(function( {
        element.classlist.remove('loading');
    }, index * 500);
});