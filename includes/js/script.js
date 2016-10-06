/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function(){
  $('#alertMe').click(function(e){
    e.preventDefault();
    $('#successAlert').slideDown();
  });

  $('#alertHide').click(function(e){
    e.preventDefault();
    console.log("button close clicked");
    $('#successAlert').slideUp();
  });
});