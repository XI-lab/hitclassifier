
var Template = {}
Template.message = Handlebars.compile($("#tmp").html());
var id = gup("id");
url = "https://api.mongolab.com/api/1/databases/hitclassify/collections/hit?q={id:"+ id + "}&apiKey=FzmG9iesxbf045DUjY1tfo65U7584rWO"
$.ajax( { url: url,
          type: "GET",
          contentType: "application/json",
          success: function(data) {
                   console.log(url);
                   console.log(data);
                   $('#container-task').html(Template.message(data[0]));
                }
      } );