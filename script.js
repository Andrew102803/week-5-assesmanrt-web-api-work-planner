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
//displays your stuff from local
function plannerDataDisplay() {
  Plannermain.forEach(function (hour) {
    $("#" + hour.id).val(hour.dataPlanner);
  });
}

//does stuff with your data, look man the function right below describes it it litersally loads your data stop reading my comments
function dataLoader() {
    //yyyyyyyyeeeeeeeaaaahhhh baby new variabke woooooooooooooooooooooooooooooo
  var loaddata = JSON.parse(localStorage.getItem("dayPlanner"));
  if (loaddata) {
    Plannermain = loaddata;
    //3rd nose bleed
  }
  storePlannerData();
  plannerDataDisplay();
}
//omg it make da thing check the hour
Plannermain.forEach(function (hour) {
  var tRow = $("<form>");
  tRow.addClass("row");
  $(".container").append(tRow);
//https://youtu.be/VbmjkLBybvk
  var signthingy = $("<div>");
  signthingy.addClass("col-md-2 hour");
  signthingy.text(hour.hourthingy + hour.afternoonormorning);
//evrry second i spend here i deterioate
  var inputtime = $("<div>");
  inputtime.addClass("col-md-9 description p-0");
//aghhhhhhhhhhhhhhhhhhhh
  var importantdata = $("<textarea>");
  importantdata.attr("id", hour.id);
//why tho
//colors baby, thatss right makes da time the colro code correct omg 
  if (hour.time == moment().format("HH")) {
    importantdata.addClass("present");
    //hours aghhhhhhhhhhhhhhhhhhh
  } else if (hour.time < moment().format("HH")) {
    //we live in a past society
    importantdata.addClass("past");
  } else if (hour.time > moment().format("HH")) {
    //the future do be wildin
    importantdata.addClass("future");
  }
  inputtime.append(importantdata);
//https://youtu.be/UvEzFW_pH1g
  // make da save button
  //i should start writin in german
  //Mann, das ist Schmerz
  //es macht irgendwie Spaß
  //ok ill stop
  //maybe...
  var savething = $("<i class='far fa-save fa-lg'></i>");
  var donesaving = $("<button>").addClass("col-md-1 saveBtn");

  //puts the elements on the row
  donesaving.append(savething);
  tRow.append(signthingy, inputtime, donesaving);
});
//save button functions appropriately
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  //saving information into array
  var saveIndex = $(this).siblings(".description").children().attr("id");
  Plannermain[saveIndex].dataPlanner = $(this)
    .siblings(".description")
    .children()
    .val();
//opium war was cool
  storePlannerData();
  plannerDataDisplay();
});
//i just wanna play hoi4
//makes the dat show
currentDate();
//does the thing it says dummy
//no seiosuly you have no brain
//stop
dataLoader();

writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Action is the real measure of intelligence.";
    quotes[1] = "Baseball has the great advantage over cricket of being sooner ended.";
    quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
    quotes[3] = "A good head and a good heart are always a formidable combination.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();
  //added a fun
