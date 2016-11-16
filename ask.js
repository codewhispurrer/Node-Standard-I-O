// Standard I/O using the built-in Node.js Readline Module
var readline = require('readline');

// create an instance of readline to control I/O
var rl = readline.createInterface(process.stdin, process.stdout);

var person = {
  name: '',
  likes: []
};

// rl.question(query, callback)
rl.question("Name someone you know: ", function(answer){
  person.name = answer;
  rl.setPrompt(`What does ${person.name} like? `); // set prompt
  rl.prompt(); // display prompt

  rl.on('line', function(saying){ // event listener for input
    person.likes.push(saying.trim());
    if (saying.toLowerCase().trim() === 'exit'){
      rl.close();
    } else {
      rl.setPrompt(`What else does ${person.name} like? (type 'exit' to leave) `);
      rl.prompt();
    }
  });
});

// listener for close event
rl.on('close', function(){
  person.likes.pop();
  console.log("%s likes all of these things: %j", person.name, person.likes);
  process.exit();
});
