function distanceFromHqInBlocks(blockNumber) {
  return blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber;
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return start > destination
    ? (start - destination) * 264
    : (destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
