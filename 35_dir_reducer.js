// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr = []) {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  return arr.reduce((dirs, dir) => {
    dirs[dirs.length - 1] === opposites[dir] ? dirs.pop() : dirs.push(dir);
    return dirs;
  }, []);
}

dirReduc(['EAST', 'NORTH', 'SOUTH', 'NORTH', 'EAST', 'WEST']);
