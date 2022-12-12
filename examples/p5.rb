require 'js'

p5 = JS.global[:p5]
window = JS.global[:window]
document = window[:document]

sketch = ->(p) {
  x = 100
  y = 100 

  p[:setup] = -> {
    p.createCanvas(700, 410)
  }

  p[:draw] = -> {
    p.background(0)
    p.fill(255)
    p.rect(x, y, 50, 50)
  }
}

container = document.querySelector('[data-id="output"]')
container[:innerHTML] = ''
window[:constructors].p5(sketch, container)
