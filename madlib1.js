
// README: Example of standard i/o process in Node
// Execute within the terminal:
// $ node madlib1

// Array of madlib questions
var questions = [
  "24 questions will be asked of you for this madlib.\n\n1. Please enter a noun: ",
  "2. Please enter a noun: ",
  "3. Please enter a plural noun: ",
  "4. Please enter a past-tense verb: ",
  "5. Please enter a past-tense verb: ",
  "6. Please enter a past-tense verb: ",
  "7. Please enter a past-tense verb: ",
  "8. Please enter a noun: ",
  "9. Please enter a past-tense verb: ",
  "10. Please enter a noun: ",
  "11. Please enter an adjective: ",
  "12. Please enter a noun: ",
  "13. Please enter a verb: ",
  "14. Please enter an adjective: ",
  "15. Please enter a noun: ",
  "16. Please enter a verb: ",
  "17. Please enter an adjective: ",
  "18. Please enter a past-tense verb: ",
  "19. Please enter a noun: ",
  "20. Please enter a verb ending in -ing: ",
  "21. Please enter a past-tense verb: ",
  "22. Please enter a past-tense verb: ",
  "23. Please enter a noun: ",
  "24. Please enter a plural noun: "
];

var answers = [];

function ask(i){
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
}

// Event listener for standard input process
process.stdin.on('data', function(data){
  // Add input to answers array
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    // Ask next question
    ask(answers.length);
  } else {
    // No more questions to ask
    process.exit();
  }
});

// Event listener for exiting the process
process.on('exit', function(){
  process.stdout.write("\n\n");
  process.stdout.write(`Little Red Riding Hood\n\nOne day, Little Red Riding Hood\’s ${answers[0]} said to her, \"Take this basket of goodies to your grandma\’s ${answers[1]}, but don\’t talk to ${answers[2]} on the way!\” Promising not to, Little Red Riding Hood ${answers[3]} off. On her way she ${answers[4]} the Big Bad Wolf who asked, \“Where are you going, little girl?\” \“To my grandma\’s, Mr. Wolf!\” she answered. The Big Bad Wolf then ${answers[5]} to her grandmother\’s cottage much before Little Red Riding Hood, and ${answers[6]} on the door. When Grandma opened the door, he locked her up in the ${answers[7]}. The wicked wolf then ${answers[8]} Grandma\’s clothes and lay on her bed, waiting for Little Red Riding Hood. When Little Red Riding Hood reached the cottage, she entered and went to Grandma\’s ${answers[9]}. \“My! What ${answers[10]} ${answers[11]} you have, Grandma!\” she said in surprise. \“All the better to ${answers[12]} you with, my dear!\” replied the wolf. \“My! What ${answers[13]} ${answers[14]} you have, Grandma!\” said Little Red Riding Hood. \“All the better to ${answers[15]} you with, my dear!\” said the wolf. \“What ${answers[16]} teeth you have, Grandma!\” said Little Red Riding Hood. \“All the better to eat you with!\” growled the wolf pouncing on her. Little Red Riding Hood ${answers[17]} and the ${answers[18]} in the forest came ${answers[19]} to the cottage. They ${answers[20]} the Big Bad Wolf and rescued Grandma from the ${answers[7]}. Grandma hugged Little Red Riding Hood with joy. The Big Bad Wolf ${answers[22]} away never to be seen again. Little Red Riding Hood had learned her ${answers[23]} and never spoke to ${answers[24]} ever again.`);
  process.stdout.write("\n\n");
});

ask(0);
