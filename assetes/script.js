// current date/day
var currentDate = moment().format("dddd, MMMM Do"); 
$("#timer").text(currentDate);

// define save button
var saveButtonEl = $(".btn")
var currentHour = moment().hours();
let userText = $(".row textarea");

  // function
  $(userText).each(function() {

    // var blockTime = $(this).data(".hour");
    let hourValue = $(this).data("hour");

    if (hourValue < currentHour) {
        $(this).addClass("past");
    } else if (hourValue === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
    
  });

// savebutton click listener
saveButtonEl.on('click', function () {
    console.log("you clicked the button")

    var eventEntered= $(this).siblings(".description").val()
    var eventHour = $(this).parent().attr("id");
    // var eventEntered =$(this).siblings(".description").val(); // explain
    // var eventHour = $(this).data("id"); // explain
    

    console.log(eventHour);
    localStorage.setItem(eventHour, eventEntered);

});

//create function that will keep data on page after refresh
$(userText).each(function(){
    var hour = $(this).data("hour");
    
    var description = localStorage.getItem(hour);
    $(this).val(description);
});



    
