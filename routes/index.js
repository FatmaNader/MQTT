var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var options;
var mqtt = require('mqtt');

var mytopic;
module.exports = function(app) {

  //var client1;
  var client;
  var server;

  app.post('/', urlencodedParser, function(req, res) {

    options = {
      topic:(req.body.topic) ,
      qos: (req.body.qos),
      retain: true,
      username: (req.body.name),
      password: (req.body.password)
    }
    server=(req.body.server);
    client = mqtt.connect(server, {
      will: options
    });
    client.on('connect', function() {
      console.log("hello mqtt")
      client.publish(req.body.topic, 'Hello mqtt')
    })

    client.on('message', mqtt_messsageReceived);
    res.json({
      success: "Connected Successfully",
      status: 200
    });

  });

  app.post('/subscribe', urlencodedParser, function(req, res) {
    mytopic = (req.body.topic);
    qos = (req.body.qos)
    client = mqtt.connect('mqtt://broker.hivemq.com', {
      will: {
        qos:qos,
        topic: mytopic
      }
    });

    console.log(qos);
    client.subscribe(mytopic);
    client.on('message',function(Ptopic, message, packet){
    console.log('Topic=' + Ptopic + '  Message=' + message);


  });
});


  app.post('/publish', urlencodedParser, function(req, res, next) {

    var Ptopic = (req.body.Ptopic);
    var message = (req.body.Pmessage);
    var qos=(req.body.Pqos);
    client.publish(Ptopic,qos, message,function (err){
    });


  });

  app.get('/', function(req, res, next) {
      res.render('index.ejs',{taken:''});
    });
}

function mqtt_messsageReceived(Ptopic, message, packet) {
  console.log('Topic=' + Ptopic + '  Message=' + message);


}

function mqtt_reconnect(err) {
  console.log("Reconnect MQTT");
  if (err) {
    console.log(err);
  }
  client = mqtt.connect('mqtt://broker.hivemq.com', options);
}
