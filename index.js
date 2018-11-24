document.addEventListener('DOMContentLoaded', function () {

  var canvas = document.querySelector('.canvasContainer')
  var palette = document.querySelector('.paletteContainer')
  var changeBrush;

  for (var i = 0; i < 2355; i++) {
    var pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.addEventListener('click', (event) => {
      console.log('i was clicked', event.target)
      // event.target.classList.remove(pixel)
      event.target.classList.remove('white', 'red', 'blue', 'green', 'purple', 'black')
      event.target.classList.add(changeBrush)
    })
    canvas.appendChild(pixel)
    // pickColor = changeBrush
  }


  var colors = ['white', 'red', 'blue', 'green', 'purple', 'black']

  for (var i = 0; i < colors.length; i++) {
    var pickColor = colors[i]
    var paletteColor = document.createElement('div')
    console.log(paletteColor)
    paletteColor.classList.add('colorContainer')
    // console.log(paletteColor.className)
    // console.log('paletteColor made')
    paletteColor.addEventListener('click', (event) => {
      changeBrush = event.target.style.backgroundColor
      console.log(changeBrush)
    })
    palette.appendChild(paletteColor)
    paletteColor.style.backgroundColor = pickColor
    console.log(paletteColor)
  }
})

