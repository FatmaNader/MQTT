
$(function(){
  $('#connect').click(function(event ){
      event.preventDefault();
    console.log("heree");
var topic =$("#topic");
var name =$("#name");
var password =$("#password");

var user = {
  topic : topic.val(),
  name : name.val(),
  password : password.val()
};
    $.ajax ({
  type: 'POST',
  url: '/',
  data:user,
  success: function(){
  //  window.location.href = "/user/home/"+data.id;
  console.log("Connected");

  document.getElementById("connect").value="connected";
document.getElementById("connect").disabled=true;
  },
  error: function(error){

      console.log("NOT Connected");

  }
  });
});
});


$(function(){
  $('#submit').click(function(event ){
    event.preventDefault();
    console.log("heree");
    var topic =$("#Stopic");
    var  subscribe ={
        topic:topic.val()
    };
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
    //echo('eeeee');
  }
  });
});
});


$(function(){
  $('#publish').click(function(event ){
      event.preventDefault();
    console.log("publish");
var Ptopic =$("#Ptopic");
var Pmessage =$("#Pmessage");

var user = {
  Ptopic : Ptopic.val(),
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
});
});
