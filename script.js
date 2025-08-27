{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let workTime = 100 * 60;\
let breakTime = 10 * 60;\
let isWork = true;\
let timeLeft = workTime;\
let timerId = null;\
\
const timerDisplay = document.getElementById("timer");\
const startBtn = document.getElementById("startBtn");\
const pauseBtn = document.getElementById("pauseBtn");\
const resetBtn = document.getElementById("resetBtn");\
const setBtn = document.getElementById("setBtn");\
\
function updateDisplay() \{\
  let minutes = Math.floor(timeLeft / 60);\
  let seconds = timeLeft % 60;\
  timerDisplay.textContent = \
    `$\{minutes.toString().padStart(2,"0")\}:$\{seconds.toString().padStart(2,"0")\}`;\
\}\
\
function startTimer() \{\
  if (timerId) return; // Prevent multiple intervals\
  timerId = setInterval(() => \{\
    if (timeLeft > 0) \{\
      timeLeft--;\
      updateDisplay();\
    \} else \{\
      isWork = !isWork;\
      timeLeft = isWork ? workTime : breakTime;\
      updateDisplay();\
      alert(isWork ? "Back to work!" : "Take a break!");\
    \}\
  \}, 1000);\
\}\
\
function pauseTimer() \{\
  clearInterval(timerId);\
  timerId = null;\
\}\
\
function resetTimer() \{\
  pauseTimer();\
  isWork = true;\
  timeLeft = workTime;\
  updateDisplay();\
\}\
\
function setTimes() \{\
  let workInput = parseInt(document.getElementById("workInput").value);\
  let breakInput = parseInt(document.getElementById("breakInput").value);\
  if (workInput > 0) workTime = workInput * 60;\
  if (breakInput > 0) breakTime = breakInput * 60;\
  resetTimer();\
\}\
\
startBtn.addEventListener("click", startTimer);\
pauseBtn.addEventListener("click", pauseTimer);\
resetBtn.addEventListener("click", resetTimer);\
setBtn.addEventListener("click", setTimes);\
\
updateDisplay();\
}