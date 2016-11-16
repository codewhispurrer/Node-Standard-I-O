var question = "Set timer for how many minutes? ";
process.stdout.write(`${question}`);

// Event listener for standard input process
process.stdin.on('data', function(data){
  if (isNaN(data)){
    // Ensure input a number
    question = "\nThat is not a number. Set timer for how many minutes? "
    process.stdout.write(`${question}`);
  } else {
    var seconds = (data*60)*1000;
    var waitInterval = 1000; // one second
    setInterval(function(){
      if (seconds <= 0){
        process.stdout.write("Time is up.");
        process.exit();
      } else {
        seconds -= waitInterval;
        console.log(`${seconds/1000} seconds left...`);
      }
    }, waitInterval);
  };
});
