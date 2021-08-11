var dogContainer  = document.querySelector('.dog-image-container');

function loadImg(breed){
    dogContainer.innerHTML = ""
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        if(response.status === "success"){
            for(let i of response.message){
                // $('dogContainer').append('<img src='+ i + '>' );
                var elem = document.createElement("img");
                elem.setAttribute("src", i);
                elem.setAttribute("class", "dog-image");
                elem.setAttribute("alt", breed);
                dogContainer.append(elem);
                // dogContainer.appendChild('<img src='+ i + '>');
                console.log(i);
            }
        }
        else{
            // Image by <a href="https://pixabay.com/users/creozavr-2567670/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3542195">Dmitry Abramov</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3542195">Pixabay</a>
            var elem = document.createElement("img");
            elem.setAttribute("src", "img/doggo404.png");
            elem.setAttribute("class", "dog-not-found");
            elem.setAttribute("alt", breed);
            dogContainer.append(elem);
            window.alert('Breed : ' + breed + ' not found.. \nPlease check the spelling and try again');
            return;
        }
    }
    xhrRequest.open('get','https://dog.ceo/api/breed/'+ breed +'/images');
    xhrRequest.send();
}

function doggo(){
    var breed = document.getElementById('search-bar').value.toLowerCase();
    if( breed == ""){
        window.alert('Please provide the input');
        return;
    }
    console.log(breed);
    loadImg(breed);
}