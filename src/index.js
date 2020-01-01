(function() {
  // 小时指示进度
  var hourCircle = document.getElementById("hourCircle");
  var hourText = document.getElementById("hourText");
  var hour = 0;

  var hourTimer = null;
  function getHour() {
    var now = new Date();
    hour = now.getHours();
    function changeHour() {
      changeProgress(hour, hourText, hourCircle, 24);
    }
    changeHour();
    hourTimer = setTimeout(getHour, 360000);
  }
  getHour();

  // 分钟指示进度
  var minuteCircle = document.getElementById("minuteCircle");
  var minuteText = document.getElementById("minuteText");
  var minute = 0;

  var minuteTimer = null;
  function getMinute() {
    var now = new Date();
    minute = now.getMinutes();
    function changeMinute() {
      changeProgress(minute, minuteText, minuteCircle, 60);
    }
    changeMinute();
    minuteTimer = setTimeout(getMinute, 60000);
  }
  getMinute();

  // 秒钟指示进度
  var secondCircle = document.getElementById("secondCircle");
  var secondText = document.getElementById("secondText");
  var second = 0;

  var secondTimer = null;
  function getSecond() {
    var now = new Date();
    second = now.getSeconds();
    function changeSecond() {
      changeProgress(second, secondText, secondCircle, 60);
    }
    changeSecond();
    secondTimer = setTimeout(getSecond, 1000);
  }
  getSecond();

  // 进度条变化动画函数
  function changeProgress(timeValue, timeTextBox, circle, range) {
    timeTextBox.innerHTML = timeValue < 10 ? "0" + timeValue : timeValue;
    var percent = timeValue / range;
    circle.setAttribute("stroke-dashoffset", 255 - percent * 255 + "%");
  }
})();
