/**
 * Code from page 187 of the excellent book Secrets of the JavaScript Ninja by John Resig and Bear Bibeault.
 * 
 */
var timers = {
    timerID: 0,
    timers: [],
    
    add: function(fun){
      this.timers.push({fun: fun, startTime: new Date().getTime()});
    },
           
    start: function(){
      if(this.timerID) return;
      
      (function runNext(){
        if(timers.timers.length > 0){
            for(var i = 0; i < timers.timers.length; i++){
                var timer = timers.timers[i];
                if(timer.fun(timer.startTime) === false){
                    timers.timers.splice(i,1);
                    i--;
                }
            }
        }
        timers.timerID = setTimeout(runNext, 0);
      })();
    },
            
    stop: function() {
      clearTimeout(this.timerID);
      this.timerID = 0;
    }
};