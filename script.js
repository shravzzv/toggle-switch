const toggleEl = document.querySelector('input#toggle')
const audioEl = document.querySelector('audio')

const handleToggleClick = (e) => {
  if (toggleEl.checked) {
    // Toggle is ON, play audio
    audioEl.play()
  } else {
    // Toggle is OFF, pause EaudioEl (if it's playing)
    audioEl.pause()
    // Reset audio to the beginning
    audioEl.currentTime = 0
  }
}

toggleEl.addEventListener('click', handleToggleClick)
