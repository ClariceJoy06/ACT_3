//Services
var JOKE_SERVICE = {
    get: function(){
            return $.ajax({
                type: 'get',
                url: JOKES_API,
                async: false
            }).responseText;
        },
    answer: function(){
            return $.ajax({
                type: 'get',
                url: YN_API,
                async: false
            }).responseJSON.image;
        },
    reaction: function(){
            return $.ajax({
                type: 'get',
                url: YN_API,
                async: false
            }).responseJSON.answer;
        }
}




