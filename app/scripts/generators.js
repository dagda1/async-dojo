import getJSON from "read";
import async from "generator-utils";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
}

BulkLoader.prototype.iterator = function () {
  let one = "What is 2 + 2?";

  console.log("The answer to question one is " + one);

  let two = "What is 2 x 2?";

  console.log("The answer to question two is " + two);

  let three = "What is the answer to life the universe and everything?";

  console.log("The answer to question three is " + three);
};

export default BulkLoader;
