'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "RedHawk Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a RedHawks fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "14 percent of Miami alumni are married to another alum. They're called Miami Mergers and there are over 28 thousand and counting.",
    "Don't walk on the seal in Academic Quad or in Armstrong. You're supposed to walk around the right side.",
    "Legend says that if you step on the seal, you'll fail your next exam.",
    "Miami has graduated 21 national coaches of the year at the professional and collegiate levels.",
    "Miamians have won more Super Bowl rings than they have digits.",
    "Four national fraternities were founded on Miami's campus; Beta Theta Pi, Phi Delta Theta, Sigma Chi, and Phi Kappa Tau, as well as the Delta Zeta sorority.",
    "Rub the turtle's heads on the sundial for good luck on your next exams.",
    "Slant Walk is 1,014 steps from Spring Street to the Phi Delta Gates.",
    "The Miami University motto, Prodesse Quam Conspici, means To Achieve without Being Conspicuous.",
    "There are 16 cupolas on campus.",
    "Miami proudly carries the name of the Miami Tribe of Oklahoma, and has maintained a strong, mutually beneficial relationship since 1972.",
    "Miami's most popular intramural sport is Broomball.",
    "Miami University was founded in 1809, when Florida still belonged to Spain.",
    "The name of Miami's mascot is Swoop the RedHawk.",
    "The Miami Student is the oldest college newspaper in the nation.",
    "The total cost of attending Miami during its first year was $93, including board, room, tuition, laundry, candles, and wood.",
    "The first intercollegiate football game in the state of Ohio was played in 1888 between Miami and Cincinnati.",
    "Miami University is one of the very few universities in the country with its own cemetery.",
    "In the 1850's, there were five colleges in Oxford.",
    "Founded in 1907, the Miami University Men's Glee Club is one of the nation's oldest collegiate choruses.",
    "Helen Peabody was the president of the Western College for Women before it was part of Miami University. Some say she roams the halls of Peabody Hall, haunting the men, a frequent source of her irritation in the 19th century.",
    "Miami has a campus in the European country of Luxembourg.",
    "Pulitzer Prize-winning poet Robert Frost once said that Miami is the most beautiful campus that ever there was.",
    "Today, Miami's Oxford campus consists of about 8 kilometers squared, or 2,138 acres of land.",
    "Western Dining Commons was ranked in the top 36 best dining halls in the country.",
    "Miami's dining services have won 52 awards since 2004.",
    "Art Clokey, the creator of Gumby and Pokey, graduated from Miami.",
    "Andrew Daniel, winner of Big Brother 5, graduated from Miami University.",
    "Rita Dove, Pulitzer Prize winner, first African-American U.S. Poet Laureate, Consultant to the Library of Congress, and 2012 recipient of the Presidential National Medal of Arts Award, graduated from Miami University.",
    "Adam Bain, former COO of Twitter, graduated from Miami University.",
    "Ryan Graves, the Head of Global Operations at Uber, graduated from Miami University.",
    "Tom Fox, the CEO of Aston Villa football club in England, graduated from Miami University.",
    "Samuel Laws, inventor of the stock ticker on the New York Gold Exchange, graduated from Miami University.",
    "Ben Roethlisberger, two time Super Bowl winning quarterback for the Pittsburgh Steelers, graduated from Miami University.",
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
