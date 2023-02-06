
let enquiryRef = firebase.app("enquirySubmit").database().ref('enquiry-database');
let subscribeRef = firebase.app("enquirySubmit").database().ref('subscribe-database');

document.getElementById('enquiryForm01').addEventListener('submit', submitEnquiry);

function submitEnquiry(e) {

  e.preventDefault();

  var name = getInput('enquiryName');
  var number = getInput('enquiryNumber');

  $("#enquiryForm01 button").attr("disabled", "true");
  $("#enquiryForm01 input").attr("readonly", "true");
  $("#enquiryForm01 input").css("opacity", ".4");

  $.ajax({

      url:"https://script.google.com/macros/s/AKfycbx2pabElUpbyPgwqFEIug4YuEQpZZWWJjrURMXOuhb0vvQgsmIfqx6HWvOaSH3stHc/exec",
      data:$("#enquiryForm01").serialize(),
      method:"post",
      success:function (response){

        saveEnquiry(name, number);
      },
      error:function (err){

        alert("Something Error")
      }
  })
}

function saveEnquiry(name, number) {

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    mobile: number,
  })
  .then(function() {

    console.log('Synchronization succeeded');

    $("#enquiryForm01 button").removeAttr("disabled");
    $("#enquiryForm01 input").removeAttr("readonly");
    $("#enquiryForm01 input").css("opacity", "1");

    $('#enquiryForm01')[0].reset();
    $("#form-results").css("display", "block");
    $("#form-results").text("Successfully Submitted. Our team will contact you back.");
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#form-results").css("display", "block");
    $("#form-results").text("Failed Submission. Try again after reloading.");
  });
}

document.getElementById('enquiryForm02').addEventListener('submit', subscribe);

function subscribe(e) {

  e.preventDefault();

  var mail = getInput('subscriber');

  $("#enquiryForm02 button").attr("disabled", "true");
  $("#enquiryForm02 input").attr("readonly", "true");
  $("#enquiryForm02 input").css("opacity", ".4");

  $.ajax({

      url:"https://script.google.com/macros/s/AKfycbxWSoLZzf14DDnD0kGp2IjdJBro6OTRVWPle7snsKa9M-b5YOnooOHFIFqr72QmU8gJ/exec",
      data:$("#enquiryForm02").serialize(),
      method:"post",
      success:function (response){

        saveSubscriber(mail);
      },
      error:function (err){

        alert("Something Error")
      }
  })
}

function saveSubscriber(email) {

  var newEnquiry = subscribeRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    email: email,
  })
  .then(function() {

    console.log('Synchronization succeeded');

    $("#enquiryForm02 button").removeAttr("disabled");
    $("#enquiryForm02 input").removeAttr("readonly");
    $("#enquiryForm02 input").css("opacity", "1");

    $('#enquiryForm02')[0].reset();
    $("#subscribe-results").css("display", "block");
    $("#subscribe-results").text("Hey, You have Successfully subscribed");
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#subscribe-results").css("display", "block");
    $("#subscribe-results").text("Failed to subscribe. Try again after reloading.");
  });
}

// General Function
function getInput(id) {

  return document.getElementById(id).value;
}
