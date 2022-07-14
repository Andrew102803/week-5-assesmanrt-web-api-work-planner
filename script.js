//start the thing
var Plannermain = [];

//<-- 
   window.status = "why arew we still here just to suffer"; 
// --> 

function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }

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
