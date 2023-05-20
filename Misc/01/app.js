const tracker = document.querySelector('.cursor-tracker')
const trackerSize = tracker.offsetWidth
let trackerX = 0
let trackerY = 0
let mouseX = 0
let mouseY = 0
const speed = 0.05
let isVisible = false

document.addEventListener('mousemove', e => {
	if (!isVisible) {
		isVisible = true
		tracker.style.opacity = 1
		updatePosition()
	}
	mouseX = e.clientX
	mouseY = e.clientY
})

const updatePosition = () => {
	const distanceX = mouseX - (trackerX + trackerSize / 2)
	const distanceY = mouseY - (trackerY + trackerSize / 2)

	trackerX += distanceX * speed
	trackerY += distanceY * speed

	tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`

	requestAnimationFrame(updatePosition)
}