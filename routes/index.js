var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var options;
var mqtt = require('mqtt');

var mytopic;
module.exports = function(app) {

  var client1;
  var client;

  app.post('/', urlencodedParser, function(req, res) {

    options = {
      //topic:(req.body.topic) ,
    //  qos: 1,
      retain: true,
      username: (req.body.name),
      password: (req.body.password)
    }

    client1 = mqtt.connect('mqtt://broker.hivemq.com', {
      will: options
    });
    client1.on('connect', function() {
      console.log("hello mqtt")
      client1.publish(req.body.topic, 'Hello mqtt')
    })

    client1.on('message', mqtt_messsageReceived);
    res.json({
      success: "Connected Successfully",
      status: 200
    });

  });

  app.post('/subscribe', urlencodedParser, function(req, res) {
    mytopic = (req.body.topic);

    client = mqtt.connect('mqtt://broker.hivemq.com', {
      will: {
        topic: mytopic
      }
    });
    client.on('connect', function() {
      console.log("hello mqtt")

    })

    console.log(mytopic);
    client.subscribe(mytopic);
    //client.publish(req.body.topic, 'Hello mqtt')
    client.on('message', mqtt_messsageReceived);
    //client.on('reconnect',mqtt_reconnect);

  });


  app.post('/publish', urlencodedParser, function(req, res, next) {

    //client = app.get(client);
    //
    // client.on('message', function(Ptopic, message, packet) {
    //   console.log('Topic=' + Ptopic + '  Message=' + message);
    //   //res.send("Connected Successfully");
    //   //res.render('index.ejs', {fdata:message});
    //
    // });
    //client.on('reconnect', mqtt_reconnect);
    var Ptopic = (req.body.Ptopic);
    var message = (req.body.Pmessage);
    client.publish(Ptopic, message)
    //console.log(message);

  });

  app.get('/', function(req, res, next) {
      res.render('index.ejs',{taken:''});
    });
}

function mqtt_messsageReceived(Ptopic, message, packet) {
  console.log('Topic111=' + Ptopic + '  Message=' + message);
}

function mqtt_reconnect(err) {
  console.log("Reconnect MQTT");
  if (err) {
    console.log(err);
  }
  client = mqtt.connect('mqtt://broker.hivemq.com', options);
}
