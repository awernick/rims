// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
//= require jasny-bootstrap

$(function sortInventory() {
  $("#inventory th a, #inventory .pagination a").on("click", function() {
    var url = $(this).attr('href');
    $.ajax({
      url: url,
      dataType: "script",
      success: sortInventory
    });
    return false;
  });

   $("#inventory_search input").keyup(function() {
    $.get($("#inventory_search").attr("action"), $("#inventory_search").serialize(), null, "script");
    return false;
  });
});
