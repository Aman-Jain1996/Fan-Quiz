var readLineSync=require('readline-sync');
var chalk= require('chalk') ;
const log = console.log;
var count=0;

log(chalk.bold('Welcome to Fan Quiz ....... ')+'\n');

log(chalk.bold.bgMagenta(' # Chinna Thala  # MSD  # Whistle Podu')  +'\n');

var userName = readLineSync.question('Let me have your name first !!    ' , {hideEchoBack:true});


log(chalk.bold('Welcome '+chalk.yellowBright.bold(userName))+'\n');

log(chalk.bold('Welcome to the Chinna Thala quiz !! \n'+chalk.yellowBright.bold('Are you a Chinna Thala Fan ?'))+'\n');

log("Let's start the quiz !!  You will score +1 for every right answer and -1 for every wrong answer" + '\n');

var questionOne ={
  question:'Where was Dhoni born? ',
  answer : 'Ranchi'
}

var questionTwo ={
  question:'What is the NickName of Dhoni? ',
  answer : 'Mahi'
}

var questionThree ={
  question:'When did Dhoni made his international debut (Year)? ',
  answer : '2004'
}

var questionFour ={
  question:"Dhoni played for which state in Ranji Trophy (debut team)? ",
  answer : 'Bihar'
}

var questionFive ={
  question:" What is the count of Dhoni's total centuries in international Cricket ? ",
  answer : '16'
}

var questionSix ={
  question:" What is the highest score Dhoni has made in  international Cricket ? ",
  answer : '224'
}




var question =[questionOne,questionTwo,questionThree, questionFour,questionFive,questionSix];

function checkAnswer(i,Answer){
  if (question[i].answer.toUpperCase()===Answer.toUpperCase()){
    count+=1;
    log(chalk.green("Hurrah!! That's Right + 1 for that" + '\n'));
  }
  else{
    log(chalk.redBright("Oops!! That was wrong  - 1 for that"+'\n'));
  }
}


for (var i=0 ; i < question.length ; i++){
  var inputAnswer = readLineSync.question(chalk.bold(question[i].question));
  checkAnswer(i,inputAnswer);
}

if(count===6){
log(chalk.yellowBright('That was a perfect Run!! 6/6 \n' + chalk.underline('You are a Mahi Fan 👏 👏 👏')));
}
else{
  log("That's good !! You Scored " + count+ "/6");
}


