import {
  FlexLayout,
  QMainWindow,
  QPixmap,
  QWidget,
  QLabel
} from "@nodegui/nodegui";

const image = new QPixmap()
// Create context
let width = 200
let height = 200
let gl = require('gl')(width, height, { preserveDrawingBuffer: true })
const label = new QLabel()
const win = new QMainWindow();

win.setWindowTitle("Draw Test");
win.resize(200, 200);

win.setCentralWidget(label);

win.show();

setInterval(() => {
  //Clear screen to red
  gl.clearColor(Math.random(), 0, Math.random(), 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  //Write output as a PPM formatted image
  let pixels = new Uint8Array(width * height * 4)
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)

  let data = ['P3\n# gl.ppm\n', width, " ", height, '\n255\n'].join('')
  for (var i = 0; i < pixels.length; i += 4) {
    for (var j = 0; j < 3; ++j) {
      data += pixels[i + j] + ' '
    }
  }
  image.loadFromData(Buffer.from(data))
  label.setPixmap(image)
}, 1000 / 60)