//Script file


console.log(moment().hour())

//Place today's date at the top of the page
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do");



// var newEl;
// var ampm = "AM";

// for(var i=9;i<=17;i++){
//     if(i>11){
//         ampm = "PM";
//     }

//     newEl = "<div class='timeblock row'>";
//     newEl += "<div class='col-1 hour'>" + i + ampm + "</div>";
//     newEl += "<div id='description-" + i + "' class='col-10 description'></div>";
//     newEl += "<div id='save-9' class='col-1 saveBtn d-flex justify-content-center align-items-center'><i class='fas fa-save'></i></div></div>";
//     $(".container").append(newEl);
// }

//var newEl = "<div class='timeblock row'><div class='col-1 hour'>" + i + ampm + "</div>";

