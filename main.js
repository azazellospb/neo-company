const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 0;
let counter = 0;
const resultArray=[]

const intervalId = setInterval(()=>drawGraph(50, 10, 4, 6, 0.5, Math.PI/2), 0.004)


function drawGraph(offset, width, height, amp, period, phase) {
  const current = Math.sin((1/width)*(x/period + phase));
  const prev = Math.sin((1/width)*((x-0.1)/period + phase));
  y = height*amp*current;
  ctx.fillRect(x, y+offset, 2, 2);
  x+=0.1;
  if (Math.sign(current) !== Math.sign(prev)) counter++;
  if (counter === 20) {
    clearInterval(intervalId);
    console.log(resultArray);
  }
  resultArray.push([x, y])
}
