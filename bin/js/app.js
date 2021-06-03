document.getElementById("plot").addEventListener("click", function() {
    var dist = document.getElementById("dist").value;
    var iVel = document.getElementById("vel").value;
    var accel = document.getElementById("accel").value;

    var time = [];
    
    if (accel == 0){
        MaxTime = dist / iVel;
        time = [MaxTime * 0.2, MaxTime * 0.4, MaxTime * 0.6, MaxTime * 0.8, MaxTime];
    }else if (accel > 0){
        MaxTime = ((-1 * iVel) - Math.sqrt(iVel^2 + 2 * accel * dist)) / accel;
        time = [MaxTime * 0.2, MaxTime * 0.4, MaxTime * 0.6, MaxTime * 0.8, MaxTime];
    }else{
        MaxTime = ((-1 * iVel) + Math.sqrt(iVel^2 + 2 * accel * dist)) / accel;
        time = [MaxTime * 0.2, MaxTime * 0.4, MaxTime * 0.6, MaxTime * 0.8, MaxTime];
    }

    pos = []
    for (var i = 0; i < time.length; i++) {
        pos[i] = (iVel * time[i]) + (0.5 * accel * (time[i] ^ 2));
        console.log("(" + time[i] + ", " + pos[i] + ")")
    };

    var position = new Chart(document.getElementById("position"), {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            { 
            data: pos,
            label: "Displacement",
            borderColor: "#3e95cd",
            fill: false
            }
        ]
    }
});
});

