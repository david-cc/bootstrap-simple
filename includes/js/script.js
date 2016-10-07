/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function(){
  // Show alert
  $('#alertMe').click(function(e){
    e.preventDefault();
    $('#successAlert').slideDown();
  });

  // Hide alert
  $('#alertHide').click(function(e){
    e.preventDefault();
    $('#successAlert').slideUp();
  });

  $('a.pop').click(function(e){
    e.preventDefault();
  });

  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();
});