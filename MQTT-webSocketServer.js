
var mqtt= require('mqtt');
$(function(){
  $("#connect").click(function(event ){
    event.preventDefault();

var name =$("#name");
var password =$("#password");
  var client= mqtt.connect(`mqtt://broker.mqttdashboard.com`,{
  will: {
    topic: `dead`,
    qos: 1,
    retain: true,
    username: `myuser`,
    password: `mypassword`
  }
});
});
});
