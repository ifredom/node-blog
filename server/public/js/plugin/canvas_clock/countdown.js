var WINDOW_WIDTH = 1024
var WINDOW_HEIGHT = 468
var RADIUS = 8
var MARGIN_TOP = 60 // 每一个数字距离上部的距离
var MARGIN_LEFT = 30 // 第一个数字距离左部的距离

// 倒计时最多4天
const endTime = new Date(2017, 10, 28, 15, 55, 52) // 月从0开始计数
var curShowTimeSeconds = 0
var balls = []
const colors = ['#33B5E5', '#0099CC', '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', '#FF8800', '#FF4444', '#CC0000']
window.onload = function () {
	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')

	canvas.width = WINDOW_WIDTH
	canvas.height = WINDOW_HEIGHT

	curShowTimeSeconds = getCurrentShowTimeSeconds()
	setInterval(
		function () {
			reader(context)
			update()
		},
		50
	)
}
function getCurrentShowTimeSeconds() {

	var curTime = new Date()
	var ret = endTime.getTime() - curTime.getTime()
	ret = Math.round(ret / 1000)

	return ret >= 0 ? ret : 0
}
function update() {

	var nextShowTimeSeconds = getCurrentShowTimeSeconds()

	var nextHours = parseInt(nextShowTimeSeconds / 3600)
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60)
	var nextSeconds = nextShowTimeSeconds % 60

	var curHours = parseInt(curShowTimeSeconds / 3600)
	var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60)
	var curSeconds = curShowTimeSeconds % 60

	if (nextSeconds != curSeconds) {
		curShowTimeSeconds = nextShowTimeSeconds
	}

}
function reader(cxt) {
	cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
	var hours = parseInt(curShowTimeSeconds / 3600)
	var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60)
	var seconds = curShowTimeSeconds % 60


	renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt)
	renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt)
	renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt)
	renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt)
	renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt)
	renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt)
	renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt)
	renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt)
}
function renderDigit(x, y, num, cxt) {
	cxt.fillStyle = 'rgb(0,102,153)'
	for (var i = 0; i < digit[num].length; i++)
		for (var j = 0; j < digit[num][i].length; j++)
			if (digit[num][i][j] === 1) {
				cxt.beginPath()
				cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI)
				cxt.closePath()
				cxt.fill()
			}
}
