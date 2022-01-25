//Script file

var schedule = [];

//Place today's date at the top of the page
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do");

//Add colored backgrounds for past, current, and future hours
for(i=9;i<=17;i++){
    if(i < moment().hour()){
        console.log("before");
        $("#description-" + i).addClass("past");
    }else if(i == moment().hour()){
        console.log("current hour - " + i);
        $("#description-" + i).addClass("present");
    }else{
        console.log("upcoming hour");
        $("#description-" + i).addClass("future");
    }
}


$(".description").click(function(){
    var id = $(this).attr("id").replace("description-", "");
    
    if(!$("#textarea-" + id).length){
        var newEl = document.createElement("textarea");
        $(newEl).attr("id", "textarea-" + id)
        $(this).append(newEl);
        newEl.focus();
    }
});



//Function to save entered text to localStorage
$(".container").on("click", ".saveBtn", function(){
    console.log($(this).attr("id"));
});