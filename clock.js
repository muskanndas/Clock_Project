function clockTime(){
    let secDots = document.getElementById('secDots');
    let minDots = document.getElementById('minDots');
    let hrDots = document.getElementById('hrDots');
    
    var date = new Date();
    var hours = date.getHours() % 12 //convert to 12-hour format
    var amPm = date.getHours() >=12 ? "PM" : "AM";
    hours = hours===0 ? 12 : hours;//handle midnight(0 hours)
    
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var secondDots = '';
    for(var i = 1;i < 61 ; i++){
        var rotation = i * 6;  //rotate each line by 6 degree
    
        if(i === seconds){
            secondDots +='<div class ="dot active" style = "transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            secondDots +='<div class ="dot" style = "transform: rotate('+rotation+'deg)"></div>';
    
        }
    }
    
    
    var minuteDots = '';
    for(var i = 1;i < 61 ; i++){
        var rotation = i * 6;  //rotate each line by 6 degree
    
        if(i === minutes){
            minuteDots +='<div class ="dot active" style = "transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            minuteDots +='<div class ="dot" style = "transform: rotate('+rotation+'deg)"></div>';
    
        }
    }
    
    
    var hoursDots = '';
    for(var i = 1;i < 13 ; i++){
        var rotation = i * 30;  //rotate each line by 30 degree
    
        if(i === hours){
            hoursDots +='<div class ="dot active" style = "transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            hoursDots +='<div class ="dot" style = "transform: rotate('+rotation+'deg)"></div>';
    
        }
    }
    
    
    
        secDots.innerHTML = secondDots + '<b>' + amPm + '</b>' + '<h2>' + zero(seconds) + '<br><span>Seconds</span></h2>';
        minDots.innerHTML = minuteDots + '<h2>' + zero(minutes) +'<br><span>Minutes</span></h2>'
        hrDots.innerHTML =  hoursDots + '<h2>' + zero(hours) + '<br><span>Hours</span></h2>'
    // secDots.innerHTML = "<h2>" + secDots + "</h2>";
    }
    
    //add zero in single digit number
    function zero(num){
        if(num<10){
            return '0' + num;
        }
        return num;
    }
    setInterval(clockTime,1000);