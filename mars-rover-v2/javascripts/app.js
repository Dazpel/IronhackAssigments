const dumbRover = {
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
  direction: "n"
};
let rovertravelLog = {};
let roverError = "I'm a dumb rover... but even I know I can't get past";

function turnLeft(rover) {
  let currentDirection = rover.direction;

  switch (currentDirection) {
    case "n":
      dumbRover.direction = "w";
      break;
    case "w":
      dumbRover.direction = "s";
      break;
    case "s":
      dumbRover.direction = "e";
      break;
    case "e":
      dumbRover.direction = "n";
      break;

    default:
      break;
  }

  console.log(`turnLeft was called!, rover is now facing ${rover.direction}`);
}

function turnRight(rover) {
  let currentDirection = rover.direction;

  switch (currentDirection) {
    case "n":
      dumbRover.direction = "e";
      break;
    case "e":
      dumbRover.direction = "s";
      break;
    case "s":
      dumbRover.direction = "w";
      break;
    case "w":
      dumbRover.direction = "n";
      break;

    default:
      break;
  }

  console.log(`turnRight was called!, rover is now facing ${rover.direction}`);
}

function moveForward(rover, direction) {
  switch (direction) {
    case "n":
    case "s":
      moveForwardVertically(rover, direction);
      break;
    case "w":
    case "e":
      moveForwardHorizontally(rover, direction);
    default:
      break;
  }
  console.log(
    `moveForward was called, new position x=${dumbRover.x}, y=${dumbRover.y}`
  );
}

function moveForwardVertically(rover, direction) {
  switch (direction) {
    case "n":
      if (rover.y === 0) {
        console.log(roverError, dumbRover.x, dumbRover.y);
      } else {
        rover.y--;
        rovertravelLog = { x: rover.x, y: rover.y };
        rover.travelLog.push(rovertravelLog);
      }
      break;
    case "s":
      if (rover.y === 9) {
        console.log(roverError, dumbRover.x, dumbRover.y);
      } else {
        rover.y++;
        rovertravelLog = { x: rover.x, y: rover.y };
        rover.travelLog.push(rovertravelLog);
      }
      break;
    default:
      break;
  }
}

function moveForwardHorizontally(rover, direction) {
  switch (direction) {
    case "w":
      if (rover.x === 0) {
        console.log(roverError, dumbRover.x, dumbRover.y);
      } else {
        rover.x--;
        rovertravelLog = { x: rover.x, y: rover.y };
        rover.travelLog.push(rovertravelLog);
      }
      break;
    case "e":
      if (rover.x >= 9) {
        console.log(roverError, dumbRover.x, dumbRover.y);
      } else {
        rover.x++;
        rovertravelLog = { x: rover.x, y: rover.y };
        rover.travelLog.push(rovertravelLog);
      }
      break;
    default:
      break;
  }
}

function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let currentDirection = dumbRover.direction;
    switch (order) {
      case "r": // right
        turnRight(rover);
        break;
      case "l": //  left
        turnLeft(rover);
        break;
      case "f": // up
        moveForward(rover, currentDirection);
        break;
      case "b": // down
        moveBackward(rover, currentDirection);
        break;
    }
  }
  console.log(dumbRover.travelLog);
}

command(dumbRover, "rffrfflfrff");
