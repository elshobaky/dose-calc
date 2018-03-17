
// Handle Cordova Device Ready Event
$(document).on('deviceready', function() {
    console.log("Device is ready!");
    ons.notification.alert("Hello, Iam ready");
});
