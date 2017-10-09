$(document).ready(function() {
  function changeTitle() {
      $.ajax({
          url : "../textos/titulo.txt",
          dataType: "text",
          success : function (data) {
              $("#text-title").html(data);
          }
      });}
  function changeText() {
      $.ajax({
          url : "../textos/descripcion.txt",
          dataType: "text",
          success : function (data) {
              $("#text-description").html(data);
          }
      });}
  changeTitle();
  changeText();
}); 