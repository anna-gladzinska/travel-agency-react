export const formatTime = (time) => {

  function zeroPadding(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
  }

  if (!time) {
    return null;
  }
  else if (time == 'abc') {
    return null;
  }
  else if (time instanceof Function) {
    return null;
  }
  else if (time < 0) {
    return null;
  }
  else {
    let output = zeroPadding(Math.floor(time / 3600), 2) + ':' + zeroPadding(Math.floor(time / 60) % 60, 2) + ':' + zeroPadding(Math.floor(time % 60), 2);

    return output;
  }
};
