window.addEventListener('DOMContentLoaded', () => {
    let shuttle = {
        height: 0,
        changeHeight: (x) => {
            shuttle.height += x;
        },
        down: 0,
        right: 0
    };

    id('takeoff').addEventListener('click', () => {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            id('flightStatus').innerHTML = "Shuttle in flight.";
            id('shuttleBackground').style.backgroundColor = 'blue';
            shuttle.changeHeight(10000);
            id('spaceShuttleHeight').innerHTML = String(shuttle.height);
        }
        move();
    });

    id('landing').addEventListener('click', () => {
        alert('The shuttle is landing. Landing gear engaged.');
        id('flightStatus').innerHTML = "The shuttle has landed.";
        id('shuttleBackground').style.backgroundColor = 'green';
        shuttle.changeHeight(-shuttle.height);
        id('spaceShuttleHeight').innerHTML = String(shuttle.height);
        move();
    });

    id('missionAbort').addEventListener('click', () => {
        if (confirm('Confirm that you want to abort the mission.')) {
            id('flightStatus').innerHTML = "Mission aborted.";
            id('shuttleBackground').style.backgroundColor = 'green';
            shuttle.changeHeight(-shuttle.height);
            id('spaceShuttleHeight').innerHTML = String(shuttle.height);
        }
        move();
    });

    function id(x) { return document.getElementById(x); }

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


/*
When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
The rocket image should move 10 px in the direction of the button that was clicked.
If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
*/
