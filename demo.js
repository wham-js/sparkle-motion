window.AudioContext = window.AudioContext || window.webkitAudioContext
var ac = new AudioContext()
var synth = require('./')(ac)
// just connect and start the synth to make sure it plays, edit as needed!
synth.connect(ac.destination)

window.setInterval(function() {
  synth.update({midiNote: 50 + ~~(Math.random() * 15)}, ac.currentTime)
  synth.start(ac.currentTime)
}, 2500)

window.setInterval(function() {
  synth.update({midiNote: 60 + ~~(Math.random() * 15)}, ac.currentTime)
  synth.start(ac.currentTime)
}, 1500)

window.setInterval(function() {
  synth.update({midiNote: 70 + ~~(Math.random() * 15)}, ac.currentTime)
  synth.start(ac.currentTime)
}, 5500)