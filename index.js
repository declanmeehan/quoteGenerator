/* global $, jQuery */

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
  }
});

const uri =
  "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$(document).ready(function() {
  $("#quoteGETJSON").on("click", function() {
    fetch(uri).then(response => console.log(response.json));
  });
});

function update(quote) {
  $(".mesage").html(JSON.stringify(quote));
}

//     .done(update)
//     .fail(handleErr);
// });

// function update(response) {
//   $("#log").prepend("<div>" + $("response").html() + "</div>");
//   $("#response").html(JSON.stringify(response));
// }

// function handleErr(textStatus, err) {
//   console.log("Request Failed: " + textStatus + ", " + err);
// }

// $(function getting() {
//   var $quote = $("#quotes");

//   $.ajax({
//     type: "GET",
//     url:
//       "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json",
//     success: function(succ) {
//       $response.append('<p> "works');
//     }
//   });
// });
