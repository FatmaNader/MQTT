var express = require('express');
// var mqtt = require('mqtt'), url = require('url');
// // Parse
// var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883'); //	m12.cloudmqtt.com
// var auth = (mqtt_url.auth || ':').split(':');
// //var router = express.Router();
 module.exports = function(app) {
// // Create a client connection
// var client = mqtt.connect(mqtt_url);
//
// client.on('connect', function() { // When connected
//
//   // subscribe to a topic
//   client.subscribe('hello/world', function() {
//     // when a message arrives, do something with it
//     client.on('message', function(topic, message, packet) {
//       console.log("Received '" + message + "' on '" + topic + "'");
//     });
//   });
//
//   // publish a message to a topic
//   client.publish('hello/world', 'my message', function() {
//     console.log("Message is published");
//     client.end(); // Close the connection when published
//   });
// });





// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://test.mosquitto.org')
//
// client.on('connect', function () {
//   client.subscribe('presence')
//   client.publish('presence', 'Hello mqtt')
// })
//
// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })

app.get('/', function(req, res, next) {
  //var config =  url.parse(mqtt_url);
//  config.topic = topic;
  res.render('index.ejs');
});
}
