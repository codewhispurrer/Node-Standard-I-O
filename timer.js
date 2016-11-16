var lowerCase = require('lower-case')

var question = "Set timer for how many minutes? ";
process.stdout.write(`${question}`);

// Event listener for standard input process
process.stdin.on('data', function(data){

  if (isNaN(data)){
    data = lowerCase(data);
    data = data.trim();
    if (data === "yes"){
      question = "Set timer for how many minutes? ";
      process.stdout.write(`${question}`);
    } else if (data === "no"){
      process.stdout.write("\n\nOK. Goodbye\n\n");
      process.exit();
    } else {
      // Ensure input is a number
      question = "\nThat is not a number. Want to set a timer? Enter 'yes' or 'no': "
      process.stdout.write(`${question}`);
    };
  } else {
    var seconds = (data*60)*1000;
    var waitInterval = 1000; // one second
    var interval = setInterval(function(){
      if (seconds <= 0){
        clearInterval(interval);
        process.stdout.write("Time is up.\nWant to set another timer? Enter 'yes' or 'no': ");
      } else {
        seconds -= waitInterval;
        console.log(`${seconds/1000} seconds left...`);
      }
    }, waitInterval);
  };
});
