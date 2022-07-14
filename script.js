
//start the thing
var Plannermain = [];

//makes it loop and makes the actual ray thingy
for (time = 9; time <= 17; time++) {
    //also yes i make th best var names
  var dataPlanner = "";
  var id = time - 9;
  var afternoonormorning = "";
  var hourthingy = 0;
//makes the clock work
  if (time === 12) {
    hourthingy = 12;
    afternoonormorning = "pm";
    } else if (time < 12) {
    hourthingy = time;
    afternoonormorning = "am";
  } else if (time > 12) {
    hourthingy = time - 12;
    afternoonormorning = "pm";
  //this part is cursed because twice when i was maming it my nose bled
  }
  hourthingy = hourthingy.toString();
//makes sure these things do there thing
  dataPlanner = {
    id: id,
    hourthingy: hourthingy,
    time: time,
    afternoonormorning: afternoonormorning,
    dataPlanner: dataPlanner,
  };
  Plannermain.push(dataPlanner);
}
//the day that your computer says it is
function currentDate() {
  var cDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(cDate);
}
//save on computer, what it says its very basic, why are you still reading this im not even funny no seriosuly atop 
function storePlannerData() {
  localStorage.setItem("dayPlanner", JSON.stringify(Plannermain));
}
//displays your stuff from local
function plannerDataDisplay() {
  Plannermain.forEach(function (hour) {
    $("#" + hour.id).val(hour.dataPlanner);
  });
}
