const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let result = "";
  console.log(par + " | " + strokes)

  if (strokes === 1) {
    result = names[0];

  } else if (strokes <= par - 2) {
    result = names[1];

  } else if (strokes == par - 1) {
    result = names[2];

  } else if (strokes == par) {
    result = names[3];

  } else if (strokes == par + 1) {
    result = names[4];

  } else if (strokes == par + 2) {
    result = names[5];

  } else if (strokes >= par + 3) {
    result = names[6];
  }

  return result;
  // Only change code above this line
}

golfScore(5, 4);