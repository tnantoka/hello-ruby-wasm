require 'js'
require 'time'

window = JS.global[:window]
window.alert(Time.now.to_s)
