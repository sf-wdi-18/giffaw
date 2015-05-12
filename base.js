var giphy_api_endpoint = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC";
var offset = 0;
var returnKeyCode = 13;
var search_term = "cats";


$(document).ready(function(){
  getAndRenderGifs(search_term);
  $("input").keypress(evaluateSearch);
  $("button").click(loadMoar);
});

function evaluateSearch(event){
  var $input = $(this);
  search_term = $input.val();
  if(event.keyCode === returnKeyCode && search_term){
    offset = 0;
    getAndRenderGifs(search_term, offset);
  }
}

function loadMoar(){
  offset += 25;
  getAndRenderGifs(search_term, offset);
}

function getAndRenderGifs(search_term, offset){
  var url = buildRequestUrl(search_term, offset);
  $.get(url, function(response){

    if (offset === 0){
      $("img").remove();
    }

    response.data.forEach(function(v,i){
      $("#gif-gallery").append($("<img>").attr("src", v.images.fixed_height.url));
    });

  });
}

function buildRequestUrl(search, offset){
  var request_url = giphy_api_endpoint;
  request_url += "&q=" + search;
  request_url += "&offset=" + offset || 0;
  return  request_url;
}