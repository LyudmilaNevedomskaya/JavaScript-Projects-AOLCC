$(function() {
  $("html").append(
    `<body>
      <div id="container">
        <div id="inner">
          <h1>Basic jQuery</h1>
          <p id="1">Click here to show the heading!</p>
          <p id="2">Paragraph two is simply Red.</p>
          <p id="3">Click here to hide the heading!</p>
        </div>
      </div>
    </body>`
  );
  // change paragraph 2 color
  $("#2").css({"color":"red"});
  // if we click on paragraph 3 the heading will slowly disappear
  $("#3").click(function() {
    $("h1").hide("slow");
  })
  // if we click on paragraph 1 the heading will back
  $("#1").on("click", function() {
    $("h1").slideDown(1200);
  })


});