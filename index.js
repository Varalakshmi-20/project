    const display=document.getElementById("display");
  let time=null;
  let startTime=0;
  let elapsedTime=0;
  let isRunning=false;
  function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        time=setInterval(update,10);  
        isRunning=true; 
     }
  }
  function stop()
  {
    if(isRunning)
    {
        clearInterval(time);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
  }
  function reset()
  {
    clearInterval(time);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent='00:00:00:00';
  }
  function update()
  {
    const current=Date.now();
    elapsedTime=current-startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/1000%60);
    let milliseconds = Math.floor(elapsedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
  }