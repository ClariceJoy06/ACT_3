$(function(){
    //Cached selectors
    var jokeButton = $('#joke-button');
    var jokeResetButton = $('#joke-reset-button');
    var jokesList = $('#jokes-list');
    var reaction = $('#reaction');
    var jokeLoader = $('#joke-loader');

    var list = document.getElementById('jokes-list');
    var reactionJoke = document.getElementById('reaction');
    
    jokeLoader.hide();
    jokeResetButton.hide();
  
    //Events
    jokeButton.on('click', function(e){
      //Do the magic here
        for (var i = 0; i < 5; i++) {
            var joke = document.createElement('div');
            joke.setAttribute('class','joke')
            joke.innerHTML = "<div>" +  JOKE_SERVICE.get() +"</div><img id='joke-image' src='" + JOKE_SERVICE.answer() +"'/>";
            
            list.appendChild(joke)
        }

        var react = document.createElement('div');

        if ( JOKE_SERVICE.reaction() == 'yes' ) {
            react.innerHTML = "<img id='react-image' src='img/funny.gif'/><p>Congratulations its your lucky day my friend. Spread the good vibes, make everyone smile.</p>"
        } else {
            react.innerHTML = "<img id='react-image' src='img/not-funny.gif'/><p>We're feelin' what you feel. It's okay, don't die yet. You can still breathe but not try to be funny right now or else ...</p>"
        }
        reactionJoke.appendChild(react);


        jokeResetButton.show();
        jokeButton.attr("disabled", true);
    });
  
    jokeResetButton.on('click', function(){
        jokeButton.attr("disabled", false);
        jokeResetButton.hide();

        while (list.hasChildNodes()) {   
            list.removeChild(list.firstChild);
        }

        reactionJoke.removeChild(reactionJoke.firstChild);

    });
    
  })