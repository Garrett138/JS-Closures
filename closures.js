/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  }
}

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the name variable. Invoke outer saving the return value into
another variable called 'inner'. */
var inner = outer();
//Once you do that, invoke inner.

inner();










/******************************************************************************\
	#PROBLEM-02
\******************************************************************************/


function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number
  }
  return dial
}

/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you're given a callFriend function that returns the dial function.
Create a callJake function that when invoked with '435-555-9248' returns 'Calling Jake at 435-555-9248'
in your console. */

var jake = callFriend("Jake")

  function callJake(num) {
  return jake(num);
  }











/******************************************************************************\
	#PROBLEM-03
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
//Write a function called makeCounter that makes the following code work
//properly.

function makeCounter() {
  var num = 0;
  return function(){

    return ++num
    console.log(num)
  }
}

//Uncomment this once you make your function
   var count = makeCounter();
   count(); // 1
   count(); // 2
   count(); // 3
   count(); // 4










/******************************************************************************\
	#PROBLEM-04
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this.
Information on the module pattern available here:
http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {

  function inc() {
    value = value +1
    return value;
  }

  function dec() {
    value = value -1
    return value;
  }


  return {inc, dec}
};

counter = counterFactory(10);
 counter.inc() // 11
 counter.inc() // 12
 counter.inc() // 13
 counter.dec() // 12










/******************************************************************************\
	#PROBLEM-05
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname) {

  var welcomeText = 'You\'re doing awesome, keep it up ';

  function message() {
    return "You're doing awesome, keep it up " + firstname + " " + lastname +".";
  }


  //Uncommment this to return the value of your invoked message function
  return message();

}

motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.










/******************************************************************************\
	#PROBLEM-06
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the module's return object create a publicMethod function that
invokes privateMethod. Invoke this by calling module.publicMethod(); outside
the module scope */

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {

publicMethod: privateMethod,


  };

})();



/******************************************************************************\
 #PROBLEM-07
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */
var friends = ["Tom", "Dick", "Harry"];
var secondLevelFriends = ["Anne", "Harry", "Quinton"];
var allUsers = ["Tom", "Dick", "Harry", "Anne", "Quinton", "Katie", "Mary"];

function findPotentialFriends(existingFriends) {


return function(already) {
    return (!existingFriends.includes(already))
  }
}


  /*for (var i = 0; i < friends.length; i++) {
    if (friends[i] === friends[i]) {
      return function() {
        if (allUsers === friends) {
          return false;
        }else{
          return true;
        }
      }
    }
  }
}*/

var isNotAFriend = findPotentialFriends( friends );
// isNotAFriend(allUsers[0]); // false
// isNotAFriend(secondLevelFriends[2]); // true


/******************************************************************************\
 #PROBLEM-07 -- BLACK DIAMOND
 \******************************************************************************/
/* Using your findPotentialFriends function from above and the Array.filter
method, find all potential second level friends as well as potential friends
from allUsers. */

var potentialSecondLevelFriends = secondLevelFriends.filter(function(names, index){
  return isNotAFriend(names)

});


var allPotentialFriends = allUsers.filter(function(names, index){
  return isNotAFriend(names)
});


/******************************************************************************\
	#PROBLEM-08
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 8 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.

 Fix the code below to log the desired output.
 */

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
  (function(count){
    setTimeout(function() {
    	console.log(count)
	}, count * 1000)
  })(i)
}}
timeOutCounter();
