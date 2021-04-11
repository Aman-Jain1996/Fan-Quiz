var readLineSync=require('readline-sync');
var chalk= require('chalk') ;
const log = console.log;
var count=0;

log(chalk.bold('Welcome to  About Info CLI App....... ')+'\n');

log('This App is a quiz about basic info of '+ chalk.bold.bgBlack.underline('Aman Jain')+'\n');

var userName = readLineSync.question('Let me have your name first !!    ' , {hideEchoBack:true});

log('\n');

log(chalk.bold('Welcome '+chalk.underline.blueBright(userName))+'\n');


log("Let's start the quiz !!  You will score +1 for every right answer and -1 for every wrong answer" + '\n');

var questionOne ={
  question:'Where do i live currently? ',
  answer : 'Kanpur'
}

var questionTwo ={
  question:'Where do i work currently? ',
  answer : 'Infosys'
}

var questionThree ={
  question:'What is my Month of Birth? ',
  answer : 'November'
}

var questionFour ={
  question:"Current Working City? ",
  answer : 'Pune'
}

var questionFive ={
  question:"Favourite IPL Team? ",
  answer : 'CSK'
}


var question =[questionOne,questionTwo,questionThree, questionFour,questionFive];

function checkAnswer(i,Answer){
  if (question[i].answer.toUpperCase()===Answer.toUpperCase()){
    count+=1;
    log(chalk.green("Hurrah!! That's Right + 1 for that" + '\n'));
  }
  else{
    log(chalk.red("Oops!! That was wrong  - 1 for that"+'\n'));
  }
}


for (var i=0 ; i < question.length ; i++){
  var inputAnswer = readLineSync.question(chalk.bold(question[i].question));
  checkAnswer(i,inputAnswer);
}

if(count===5){
log('That was a perfect Run!! 5/5');
}
else{
  log("Tht's good !! You Scored " + count+ "/5");
}


