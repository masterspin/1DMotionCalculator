document.getElementById("plot").addEventListener("click", function() {
    let dist = document.getElementById("dist").value;
    let iVel = document.getElementById("vel").value;
    let accel = document.getElementById("accel").value;

    let time = [0,1,2,3,4,5,6,7,8,9,10];
    

    pos = []
    for (let i = 0; i < time.length; i++) {
        pos[i] = (iVel * time[i]) + ((0.5 * accel) * (time[i] ** 2)) +dist;
        console.log(0.5 * accel)
        console.log("(" + time[i] + ", " + pos[i] + ")")
    };

    let position = new Chart(document.getElementById("position"), {
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

