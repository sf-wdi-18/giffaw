$(document).ready(function() {

  var giphyAPI = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';  // q=funny+cat&
  var giphyAPItrending = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
  var search = '';

  // load the local data
  render(mockData);

  // load trending gifs
  // $.get(giphyAPItrending, render);

  // search the Giphy API
  $('form').on('submit', function(event) {
    event.preventDefault();
    search = $(this.api_search).val();
    $.get(giphyAPI + '&q=' + search, render);   // $.getJSON also works
  });

  function render(data) {
    // clear the previous results
    $('div.row').empty();
    data.data.forEach(function(gif) {
        $('div.row').append("<img src='" + gif.images.fixed_height.url +  "'>");
    });
  }

});