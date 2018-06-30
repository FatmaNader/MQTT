
//to connect
$(function(){
  $('#connect').click(function(event ){
      event.preventDefault();
  //get info from user
var topic =$("#topic");
var name =$("#name");
var password =$("#password");
var qos=$("qos");
var server=$("server");


var user = {
  topic : topic.val(),
  name : name.val(),
  password : password.val(),
  qos:qos.val(),
  server:server.val()
};
    $.ajax ({
  type: 'POST',
  url: '/',
  data:user,
  success: function(){

  console.log("Connected");

  document.getElementById("connect").value="connected";
document.getElementById("connect").disabled=true;
document.getElementById("status").innerHTML = "Connected";
  },
  error: function(error){
      console.log("NOT Connected");
  }
  });
});
});

//when a topic is subscribed
$(function(){
  $('#submit').click(function(event ){
    event.preventDefault();

    var topic =$("#Stopic");
    var qos=$('#Sqos');
    var  subscribe ={
        topic:topic.val(),
        qos:qos.val()
    };
    if(topic.val()=="" )
    {
      alert("please write topc to be subscribed");
  }
  else if(document.getElementById("status").innerHTML!= "Connected")
  {
  alert("please connect");
  }
    else{
    $.ajax ({
  type: 'POST',
  url: '/subscribe',
  data: subscribe,
  success: function(data){
  //  window.location.href = "/user/home/"+data.id;
  console('Subscribed');
  //echo('rrrrr');
  },
  error: function(error){
    if(error.responseText=='showAlert')
    alert('Not connected');

  }
  });
}

});
});

//when a message is published publish
$(function(){
  $('#publish').click(function(event ){
      event.preventDefault();
    console.log("publish");
var Ptopic =$("#Ptopic");
var Pmessage =$("#Pmessage");
var Pqos=$('#Pqos');

if(document.getElementById("status").innerHTML!= "Connected")
{
alert("please connect");
}
else{
var user = {
  Ptopic : Ptopic.val(),
    Pqos : Pqos.val(),
Pmessage : Pmessage.val()
};
    $.ajax ({
  type: 'POST',
  url: '/publish',
  data:user,
  success: function(){
  //  window.location.href = "/user/home/"+data.id;
  console.log("Published");

  },
  error: function(error){

      console.log("NOT Connected");

  }
  });
}
});
});
