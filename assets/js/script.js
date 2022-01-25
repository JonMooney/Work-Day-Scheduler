//Script file

var schedule = [];

//Place today's date at the top of the page
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do");

if( localStorage.getItem("schedule")){
    schedule = JSON.parse(localStorage.getItem("schedule"));
}

//Add colored backgrounds for past, current, and future hours
for(i=9;i<=17;i++){
    if(schedule[i] != null){
        $("#description-" + i).html(schedule[i].desc);
    }

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

//Dynamically create a textarea element when clicking on a description DIV
$(".description").click(function(){
    var id = $(this).attr("id").replace("description-", "");

    // $("#description-" + id).css("padding", "5px");
    

    if(!$("#textarea-" + id).length){
        console.log("no textarea present");
        $(this).html("");
        var newEl = document.createElement("textarea");
        $(newEl).attr("id", "textarea-" + id);
        $(newEl).attr("rows", "3");
        //$(this).html("");
        $(this).append(newEl);

        for(var i=9;i<schedule.length;i++){
            if(schedule[i] != null){
                if(schedule[i].time === id){
                    $(newEl).val(schedule[i].desc);
                    break;
                }
            }
        }

        $(newEl).css("padding", "10px");
        $("#description-" + id).css("padding", "0");

        newEl.focus();
    }
    
});



//Function to save entered text to localStorage
$(".container").on("click", ".saveBtn", function(){
    var id = $(this).attr("id").replace("save-", "");
    // console.log(id);
    var desc = $("#textarea-" + id).val();
    // console.log(desc);

    if(desc.length){
        schedule[parseInt(id)] = {
            time: id,
            desc: desc
        };
        //console.log(schedule);

        localStorage.setItem("schedule", JSON.stringify(schedule));

        //Hide textarea and put standard text back into description DIV
        $("#textarea-" + id).css("visibility", "hidden");
        $("#description-" + id).css("padding", "10px");
        $("#description-" + id).html(desc);
    }

    // console.log(schedule);
});

