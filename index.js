$("#quoteGETJSON").click(function() {
  $.getJSON(
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
  )
    .done(update)
    .fail(handleErr);
});

function update(response) {
  $("#log").prepend("<pre>" + $("response").html() + "</pre>");
  $("#response").html(JSON.stringify(response));
}

// $(function() {
//   var $quote = $("#quotes");

//   $.ajax({
//     type: "GET",
//     url:
//       "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json",
//     success: function(quotes) {
//       $.each(quotes, function(i, quote) {});
//       $quote.append("<p>works</p>");
//     }
//   });
// });
