let shuttle = {
    height: 0,
    changeHeight: (x) => {
        shuttle.height += x;
    },
    down: 0,
    right: 0
};

window.addEventListener('DOMContentLoaded', (event) => {

    function id(x) { return document.getElementById(x); }

    id('takeoff').addEventListener('click', () => {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            id('flightStatus').innerText = "Shuttle in flight.";
            id('shuttleBackground').style.backgroundColor = 'blue';
            shuttle.changeHeight(10000);
            id('spaceShuttleHeight').innerText = String(shuttle.height);
        }
        move();
    });

    id('landing').addEventListener('click', () => {
        alert('The shuttle is landing. Landing gear engaged.');
        id('flightStatus').innerText = "The shuttle has landed.";
        id('shuttleBackground').style.backgroundColor = 'green';
        shuttle.changeHeight(-shuttle.height);
        id('spaceShuttleHeight').innerText = String(shuttle.height);
        move();
    });

    id('missionAbort').addEventListener('click', () => {
        if (confirm('Confirm that you want to abort the mission.')) {
            id('flightStatus').innerText = "Mission aborted.";
            id('shuttleBackground').style.backgroundColor = 'green';
            shuttle.changeHeight(-shuttle.height);
            id('spaceShuttleHeight').innerText = String(shuttle.height);
        }
        move();
    });

    function move(direction) {
        if (direction === 'up') {
            shuttle.down -= 10;
            shuttle.changeHeight(10000);
        }
        if (direction === 'down') {
            shuttle.down += 10;
            shuttle.changeHeight(-10000);
        }
        if (direction === 'right')
            shuttle.right += 10;
        if (direction === 'left')
            shuttle.right -= 10;
        if (!direction) {
            shuttle.down = 0;
            shuttle.right = 0;
        }
        id('rocket').style.top = String(shuttle.down) + 'px';
        id('rocket').style.left = String(shuttle.right) + 'px';
    }

});
