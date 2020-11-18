(function($){
    function addMovie( e ){
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
            success: function( data ){
                $('#response pre').html( data );

            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit(addMovie);

    function updateMovie(e){
        var dict = {
            Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data ){
                $('#response2 pre').html( data );

            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }
    $('#my-form2').submit(updateMovie);




    $.get("https://localhost:44325/api/movie/", function(data){    

        data.map(function(el){

            $("#tbody").append(
            `<tr>
            <td><p>${el.title}</p></td> 
            <td><p>${el.director}</p></td>
            <td><p>${el.genre}</p></td>
            <td><button re>Update</button></td>                                 
            </tr>`);
        })
    });  

})(jQuery);
   







