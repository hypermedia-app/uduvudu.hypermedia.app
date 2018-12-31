// <!--
// # Visualizer Tempaltes
// -->
// <script id="title" type="text/uduvudu-template">
//   <h1><%-title.u%></h1>
//   </script>
//
//   <script id="mtitle" type="text/uduvudu-template">
//   <h1><%-mtitle.title.u%></h1>
//   </script>
//
//   <script id="text" type="text/uduvudu-template">
//   <p><%-text.u%></p>
//   </script>
//
//   <script id="neighboringMunicipality" type="text/uduvudu-template">
//   <div style="width: 235px; float: left;">
//   <h4>Neighboring municipalities</h4>
// <p><ul style="border-left: 1px solid lightgrey;"><% _.each(neighboringMunicipality, function (municipality) { print('<li><a href="?res='+ municipality.title.m.r+'">'+municipality.title.u + "</a></li>"); console.log(municipality); }) %></ul></p>
// </div>
// </script>
//
// <script id="category" type="text/uduvudu-template">
//   <div style="width: 235px; float: left;">
//   <h4>Categories</h4>
//   <p><ul style="border-left: 1px solid lightgrey;"><% _.each(category, function (category) { print('<li><a href="?res='+ category.title.m.r+'">'+category.title.u + "</a></li>"); }) %></ul></p>
// </div>
// </script>
//
//
// <script id="abstract" type="text/uduvudu-template">
//   <div style="width: 560px; padding: 4px; float: left;">
//   <h2>Abstract</h2>
//   <p><%-abstract.u%></p>
//   </div>
//   </script>
//
//   <script id="quote" type="text/uduvudu-template">
//   <div style="width: 560px; padding: 4px; float: left;">
//   <p style="font-size:500%; font-family: Times New Roman; margin-bottom: -40px;">“</p>
// <p><%-quote.u%></p>
// <p style="font-size:500%; font-family: Times New Roman; margin-bottom: -40px; margin-top: -20px; text-align: right;">”</p>
// </div>
// </script>
//
// <script id="license" type="text/uduvudu-template">
//   <p><small>&copy; <%-obj.u%></small></p>
// </script>
//
// <script id="name" type="text/uduvudu-template">
//   <p><small><% print(_.toArray(name.l).join(', ')) %></small></p>
// </script>
//
// <script id="title_text" type="text/uduvudu-template">
// <%=template(title_text.title)%>
// <%=template(title_text.text)%>
//   </script>
//
//   <script id="wikiInfo" type="text/uduvudu-template">
//   <div style="height: 235px;  width: 140px; float: left;">
//   <img style="width: 30px; height: 30px; float: left;" src="http://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg">
//   <p><big>&nbsp;Wikipedia</big></p>
// <p>
// ID: <a href="http://en.wikipedia.org/?curid=<%=wikiInfo.wikiPageID.u%>"><%=wikiInfo.wikiPageID.u%></a> <br>
// Revision: <a href="http://en.wikipedia.org/?curid=<%=wikiInfo.wikiPageID.u%>&oldid=<%=wikiInfo.wikiPageRevisionID.u%>"><%=wikiInfo.wikiPageRevisionID.u%></a>
//   </p>
//   </div>
//   </script>
//
//   <script id="community" type="text/uduvudu-template">
//   <div style="max-height: 300px; width: 560px; background-color: lightgrey; padding: 4px; float: left; overflow-y: scroll;">
//   <div style=" width: 235px; overflow: hidden; margin: -4px; text-align: right;" class="pull-right">
//   <img style="max-height: 300px; max-width: 235px; margin-bottom: 10px; margin-left: 10px;" src="<%-community.img_url.u%>" />
// </div>
// <%=template(community.label_comment)%>
//   </div>
//   </script>
//
//   <script id="label_comment" type="text/uduvudu-template">
// <%=template(label_comment.title)%>
// <%=template(label_comment.text)%>
//   </script>
//
//   <script id="community_stat" type="text/x-handlebars-template">
// <%=template(community_stat.website)%>
// <%=template(community_stat.elevation)%>
// <%=template(community_stat.area)%>
//   </script>
//
//   <script id="elevation" type="text/x-handlebars-template">
//   <div style="float: left; min-width: 200px;">
//   <p><i class="glyphicon glyphicon-stats"></i> Elevation: <%=elevation.u%> m</p>
// </div>
// </script>
//
// <script id="area" type="text/x-handlebars-template">
//   <div style="float: left; min-width: 200px;">
//   <p><i class="glyphicon glyphicon-stats"></i> Area: <%=num(area.u)%> km<sup>2</sup></p>
// </div>
// </script>
//
// <script id="website" type="text/x-handlebars-template">
//   <div style="float: left; min-width: 200px;">
//   <p><i class="glyphicon glyphicon-link"></i> <a href="<%=website.u%>"><%=website.u%></a></p>
// </div>
// </script>
//
// <script id="mhltemp" type="text/x-handlebars-template">
//   <div style="float: left">
//   <br>
//   <h3>Temperatures per Month</h3>
// <canvas id="cvs_mhltemp" width="560px" height="200px"></canvas>
//   <p>Temperatures in °C/month: <span style="color: rgba(120,120,220,1)">Average Low</span>, <span style="color: rgba(220,220,220,1)">Daily Mean</span>, <span style="color: rgba(220,120,120,1)">Average High</span></p>
// </div>
// </script>
//
// <script id="mhltemp_js" type="text/x-handlebars-template">
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "http://cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js";
// script.onload = function(){
//   var ctx = document.getElementById("cvs_mhltemp").getContext("2d");
//   var data = {
//     labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//     datasets : [
//       {
//         fillColor : "rgba(120,120,220,0.5)",
//         strokeColor : "rgba(220,220,220,1)",
//         data : [<%=num(tempC.lowC.jan.u)%>,<%=num(tempC.lowC.feb.u)%>,<%=num(tempC.lowC.mar.u)%>,<%=num(tempC.lowC.apr.u)%>,<%=num(tempC.lowC.may.u)%>,<%=num(tempC.lowC.jun.u)%>,<%=num(tempC.lowC.jul.u)%>,<%=num(tempC.lowC.aug.u)%>,<%=num(tempC.lowC.sep.u)%>,<%=num(tempC.lowC.oct.u)%>,<%=num(tempC.lowC.nov.u)%>,<%=num(tempC.lowC.dec.u)%>]
// },
//   {
//     fillColor : "rgba(220,220,220,0.5)",
//       strokeColor : "rgba(220,220,220,1)",
//     data : [<%=num(tempC.meanC.jan.u)%>,<%=num(tempC.meanC.feb.u)%>,<%=num(tempC.meanC.mar.u)%>,<%=num(tempC.meanC.apr.u)%>,<%=num(tempC.meanC.may.u)%>,<%=num(tempC.meanC.jun.u)%>,<%=num(tempC.meanC.jul.u)%>,<%=num(tempC.meanC.aug.u)%>,<%=num(tempC.meanC.sep.u)%>,<%=num(tempC.meanC.oct.u)%>,<%=num(tempC.meanC.nov.u)%>,<%=num(tempC.meanC.dec.u)%>]
//   },
//   {
//     fillColor : "rgba(220,120,120,0.5)",
//       strokeColor : "rgba(220,220,220,1)",
//     data : [<%=num(tempC.highC.jan.u)%>,<%=num(tempC.highC.feb.u)%>,<%=num(tempC.highC.mar.u)%>,<%=num(tempC.highC.apr.u)%>,<%=num(tempC.highC.may.u)%>,<%=num(tempC.highC.jun.u)%>,<%=num(tempC.highC.jul.u)%>,<%=num(tempC.highC.aug.u)%>,<%=num(tempC.highC.sep.u)%>,<%=num(tempC.highC.oct.u)%>,<%=num(tempC.highC.nov.u)%>,<%=num(tempC.highC.dec.u)%>]
//   }
// ]
// }
//   new Chart(ctx).Bar(data);
// };
// document.body.appendChild(script);
// </script>
//
// <script id="humidity" type="text/x-handlebars-template">
//   <div style="float: left">
//   <br>
//   <h3>Humidity per Month</h3>
// <canvas id="cvs_humidity" width="560px" height="200px"></canvas>
//   <p>Humidity in %/month</p>
// </div>
// </script>
//
// <script id="humidity_js" type="text/x-handlebars-template">
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "http://cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js";
// script.onload = function(){
//   var ctx = document.getElementById("cvs_humidity").getContext("2d");
//   var data = {
//     labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//     datasets : [
//       {
//         fillColor : "rgba(120,220,120,0.5)",
//         strokeColor : "rgba(220,220,220,1)",
//         data : [<%=humi.jan.u%>,<%=humi.feb.u%>,<%=humi.mar.u%>,<%=humi.apr.u%>,<%=humi.may.u%>,<%=humi.jun.u%>,<%=humi.jul.u%>,<%=humi.aug.u%>,<%=humi.sep.u%>,<%=humi.oct.u%>,<%=humi.nov.u%>,<%=humi.dec.u%>]
// }
// ]
// }
//   new Chart(ctx).Bar(data, {scaleOverride: true,scaleSteps: 10, scaleStepWidth: 10, scaleBeginAtZero : true});
// };
// document.body.appendChild(script);
// </script>
//
// <script id="location" type="text/uduvudu-template">
//   <div id="map-canvas" style="height: 250px; width: 560px; float: left;">
//   <big>&#8982;</big> <%-location.lat.u%> / <%-location.long.u%>
// </div>
// </script>
//
// <script id="location_js" type="text/uduvudu-template">
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAFRTcPPyYit9ERj9COlgpgYW-Ve-lUeUs&sensor=false&callback=initializeMap";
// document.body.appendChild(script);
//
// initializeMap = function () {
//   var myLatlng = new google.maps.LatLng(<%-location.lat.u%>, <%-location.long.u%>);
//   var mapOptions = { center: myLatlng, disableDefaultUI: true, zoomControl: true, zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP };
//   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
// };
// </script>
//
// <script id="created" type="text/uduvudu-template">
//   <div style="height: 235px; width: 140px; float: left;">
//   This resource was created on ≤%-created.u%>.
// </div>
// </script>
//
// <script id="img" type="text/uduvudu-template">
//   <div style="width: 140px; height: 235px; float: left">
//   <img style="min-width: 140px; min-height: 235px;" src="<%-img_url.u%>" class="img-responsive" />
//   </div>
//   </script>
//
//   <!-- container for literals -->
//   <script id="literals" type="text/uduvudu-template">
//   <div style="clear: both;">
//   <button class="btn btn-default col-md-12 btn-sm" type="button" data-toggle="collapse" data-target="#literalsCollapse" aria-expanded="false" aria-controls="literalsCollapse">
//   Show remaining literals
// </button>
// <br>
// <div class="collapse" id="literalsCollapse">
//   <% _.each(literals, function(e) {print(template(e.literal))}); %>
// </div>
// <br>
// </div>
// </script>
//
// <!-- container for unknowns -->
// <script id="unknowns" type="text/uduvudu-template">
//   <div style="clear: both;">
//   <button class="btn btn-default col-md-12 btn-sm" type="button" data-toggle="collapse" data-target="#unknownsCollapse" aria-expanded="false" aria-controls="unknownsCollapse">
//   Show remaining links
// </button>
// <br>
// <div class="collapse" id="unknownsCollapse">
//   <% _.each(unknowns, function(e) {print(template(e.unknown))}); %>
// </div>
// <br><br><br>
// </div>
// </script>
//
// <!-- literal -->
// <script id="literal" type="text/uduvudu-template">
//   <div style=" width: 140px; height: 140px; float: left; overflow: hidden;"><p title="<%-literal.subject.u%> - <%-literal.predicate.u%>"><b><%-literal.name.u%></b>:<br /> <%-literal.text.u%></p></div>
// </script>
//
// <!-- void -->
// <script id="void" type="text/uduvudu-template">
//   </script>
//
//   <!-- unknown -->
//   <script id="unknown" type="text/uduvudu-template">
//   <div style=" width: 140px; height: 140px; float: left; overflow: hidden;">
// <small><p><%=unknown.subject.u%><br />&#9608;<br /><%=unknown.predicate.u%><br />&#9608;<br /><%=unknown.object.u%></p></small>
// </div>
// </script>
