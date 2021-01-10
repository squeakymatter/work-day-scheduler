// display current day on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// listen for .saveBtn clicks
$(".saveBtn").on("click", function () {
  //get description field value
  var userInput = $(this).siblings(".description").val();
  var timeSlot = $(this).parent().attr("id");

  // save to localStorage
  localStorage.setItem(timeSlot, userInput);
});

//retrieve items from localStorage (refresh page to test)

$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time20 .description").val(localStorage.getItem("time20"));
$("#time23 .description").val(localStorage.getItem("time23"));

function trackHour() {
  //check each time block with a loop
  $(".time-block").each(function () {
    //use momentJS to compare time slot with current hour
    var timeSlotHour = moment(parseInt($(this).attr("id").replace("time", "")));
    var currentHour = moment(moment().hour());

    //compare current time in hours to scheduled time of item
    //change color of description field based on past/present/future in hours
    if (currentHour.isSame(timeSlotHour)) {
      $(this).children(".description").removeClass("past future");  
      $(this).children(".description").addClass("present");
    } else if (currentHour.isAfter(timeSlotHour)) {
      $(this).children(".description").removeClass("present future");
      $(this).children(".description").addClass("past");
    } else currentHour.isBefore(timeSlotHour);
    {
      $(this).children(".description").removeClass("present past");
      $(this).children(".description").addClass("future");
    }
  });
}

trackHour();
