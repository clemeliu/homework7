function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    let location;
    // location = document.querySelector("#location").value;

    if (!document.querySelector("#location").value){
        location="Ann Arbor";
    }
    else {
        location=document.querySelector("#location").value;
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    let unit;
    // = document.querySelector("input[name=temp]:checked");
    if (!document.querySelector("input[name=temp]:checked")){
        format = "imperial";
        
    }
    else {
        format = document.querySelector("input[name=temp]:checked").value;
        
    }

    // Your code here.
    
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    
    //string manipulation
    query="http://api.openweathermap.org/data/2.5/weather?q="+location+ "&units=" + format + "&appid=c86fe430d69f54a793f49bc188de495d";

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    loc = document.querySelector("#loc");

    let temp;
    temp = document.querySelector("#temp");

    let tempImg;
    tempImg = document.querySelector("#tempImg");
    let icon;
    icon = "http://openweathermap.org/img/wn/";



    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.innerHTML = json["name"];
        temp.innerHTML = json.main.temp + " " + " degrees and " + json.weather[0]["description"];
        // temp.innerHTML += " degrees and "
        // temp.innerHTML += json.weather[0]["description"];
        console.log(temp)
        tempImg.src = icon + json.weather[0]["icon"] + "@2x.png"
        console.log(tempImg)
        


    });
}
