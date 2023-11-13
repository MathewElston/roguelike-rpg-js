const mouseState = {
  mouseDown: false,
  mouseUp: false,
  position: {
    x: 0,
    y: 0,
  },
};

const doMouseUp = (e) => {
  mouseState.mouseDown = false;
  mouseState.mouseUp = true;
};

const doMouseDown = (e) => {
  mouseState.mouseUp = false;
  mouseState.mouseDown = true;
};

const doMouseMove = (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseState.position.x = e.clientX - rect.left - 10;
  mouseState.position.y = e.clientY - rect.top - 10;
};

canvas.addEventListener("mouseup", doMouseUp, true);
canvas.addEventListener("mousedown", doMouseDown, true);
canvas.addEventListener("mousemove", doMouseMove, true);
