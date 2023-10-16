const keyState = {
  value: 0,
};

const doKeyDown = (e) => {
  switch (e.keyCode) {
    case 32: // Space Key
      keyState.value = keyState.value | 16;
      break;
    case 83:
    case 40: // S Key or Arrow Down
      keyState.value = keyState.value | 8;
      break;
    case 87:
    case 38: // W Key or Arrow Up
      keyState.value = keyState.value | 4;
      break;
    case 65:
    case 37: // A Key or Arrow Left
      keyState.value = keyState.value | 2;
      break;
    case 68:
    case 39: // D Key or Arrow Right
      keyState.value = keyState.value | 1;
      break;
  }

  console.log(keyState.value);
};

const doKeyUp = (e) => {
  switch (e.keyCode) {
    // Space Key
    case 32:
      keyState.value = keyState.value & ~16;
      break;
    case 83:
    case 40: // S Key or Arrow Down
      keyState.value = keyState.value & ~8;
      break;
    // W Key or Arrow Up
    case 87:
    case 38:
      keyState.value = keyState.value & ~4;
      break;
    // A Key or Arrow Left
    case 65:
    case 37:
      keyState.value = keyState.value & ~2;
      break;
    // D Key or Arrow Right
    case 68:
    case 39:
      keyState.value = keyState.value & ~1;
      break;
  }

  console.log(keyState.value);
};

document.addEventListener("keydown", doKeyDown, true);
document.addEventListener("keyup", doKeyUp, true);
