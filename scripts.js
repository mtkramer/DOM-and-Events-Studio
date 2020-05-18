let shuttle = {
    height: 0,
    changeHeight: (x) => {
        shuttle.height += x;
    },
    down: 100,
    right: 0
};

function id(x) { return document.getElementById(x); }

function move(direction) {
    if (direction === 'up') {
        shuttle.down -= 10;
    }
    if (direction === 'down') {
        shuttle.down += 10;
    }
    if (direction === 'right') {
        shuttle.right += 10;
    }
    if (direction === 'left') {
        shuttle.right -= 10;
    }
    if (!direction) {
        shuttle.down = 100;
        shuttle.right = 0;
    }
    id('rocket').style.top = String(shuttle.down) + 'px';
    id('rocket').style.left = String(shuttle.right) + 'px';
};

window.addEventListener('DOMContentLoaded', () => {

    id('takeoff').addEventListener('click', () => {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            id('flightStatus').innerText = "Shuttle in flight.";
            id('shuttleBackground').style.backgroundColor = 'blue';
            shuttle.changeHeight(10000);
            id('spaceShuttleHeight').innerText = String(shuttle.height);
            move('up');
        }
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

    id('up').addEventListener('click', () => {
        move('up');
    });
    id('down').addEventListener('click', () => {
        move('down');
    });
    id('left').addEventListener('click', () => {
        move('left');
    });
    id('right').addEventListener('click', () => {
        move('right');
    });

});
