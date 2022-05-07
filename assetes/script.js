// current date/day
var currentDate = moment().format("dddd, MMMM Do"); 
$("#timer").text(currentDate);

// define save button
var saveButtonEl = $(".btn")

//savebutton click listener
saveButtonEl.on('click', function () {
    console.log("you clicked the button")
// get row text feild class and row id values
    
var value= $(this).siblings(".description").val()
var time = $(this).parent().attr("id");
    console.log(this, "value", currentDate, "current Date")


// save in local storage
    localStorage.setItem(currentDate,value);
});

    
function hourTracker() {
  // get current number of hours
  var currentHour = moment().hours();

  // loop over time blocks
  $(".row").each(function() {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // check if we've moved past this time
    if (blockTime < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (blockTime === currrentHour) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
    

  // set up interval to check if current time needs to be updated

  // load any saved data from localStorage
  });
}


// const currentHour = moment().hours();
// let usetText = $(".row description");




  // check if we've moved past this time

  // set up interval to check if current time needs to be updated

  // load any saved data from localStorage



  // $("#hour8 .description").val(localStorage.getItem("hour8"));
//     $("#hour9 .description").val(localStorage.getItem("hour9"));
//     $("#hour10 .description").val(localStorage.getItem("hour10"));
//     $("#hour11 .description").val(localStorage.getItem("hour11"));
//     $("#hour12 .description").val(localStorage.getItem("hour12"));
//     $("#hour13 .description").val(localStorage.getItem("hour13"));
//     $("#hour14 .description").val(localStorage.getItem("hour14"));
//     $("#hour15 .description").val(localStorage.getItem("hour15"));
//     $("#hour16 .description").val(localStorage.getItem("hour16"));
//     $("#hour17 .description").val(localStorage.getItem("hour17"));

