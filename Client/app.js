$(document).ready(function(){
   
    (function($){
        function processForm( e ){
            var dict = {
                Title : this["title"].value,
                Director: this["director"].value,
                Genre: this["genre"].value
            };
    
            $.ajax({
                url: 'https://localhost:44325/api/movie',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
    
            e.preventDefault();
        }
    
        $('#my-form').submit( processForm );

        function getMovies( e ){
            $.ajax({
            url: 'https://localhost:44325/api/movie',
            type: 'GET',
            dataType: 'json',
            success: function(movies){
                movieListSuccess(movies);
            },
            error: function(request, message, error ){
                handleException(request, message, error);
            }



            })
            
            

        }
    })(jQuery);






});

