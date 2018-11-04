var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "test",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  bam();
});

function bam() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;

      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].item_id + ", " + results[i].product_name + ", $" + results[i].price);
              }
              return choiceArray;
            },
            message: "What would you like to buy from BAMazon?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          console.log (answer);
          var chosenItem;
          var answerSplat = answer.choice.split(",");
          var answerSplatParsed = parseInt(answerSplat[0]);  
          //console.log ("ASplat" + answerSplat[0]);
          //console.log ("ASParsed" + answerSplatParsed);

          for (var i = 0; i < results.length; i++) {
            if (results[i].item_id === answerSplatParsed) {
              chosenItem = results[i];
               // console.log("Chosen Item" + chosenItem);
            }
          }
  
          // determine if quantity available
          
          if (chosenItem.stock_quantity - answer.quantity >= 0) {
            // if quantity available, update quantity
            console.log ("Quantity Before: " + chosenItem.stock_quantity);
            chosenItem.stock_quantity = chosenItem.stock_quantity - answer.quantity;
            console.log ("Quantity Remaining: " + chosenItem.stock_quantity);
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: chosenItem.stock_quantity
                },
                {
                  item_id: chosenItem.item_id
                }
              ],
              function(error) {
                if (error) throw err;
                
                bam();
              }
            );
            var totalCost = chosenItem.price * answer.quantity;
            console.log("Thank you for Shopping BAMazon.  The total cost of your purchase was: $" + totalCost);
          }
          else {
            // Insufficient Quantity
            console.log("Insufficient Quantity!");
            bam();
          }
          
        });
    });
  }