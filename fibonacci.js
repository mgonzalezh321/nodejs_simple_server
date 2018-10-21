function getfibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : getfibonacci(n - 1) + getfibonacci(n - 2);
 }


function fibonnaci (query, response) {
    var res = 0
    console.log(query);
    for (var propName in query) {
        var splitted = query[propName]
        if(isNumeric(splitted) && Object.keys(query).length === 1) {
          //Ok, it's a number
          var number = Number(splitted)
          res = getfibonacci(number)
        } else {
          //It's not a number, so we show an error message and sends to the client
          response.writeHead(400, {'Content-Type': 'application/json'})
          response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
        }
    }
    //If everithing was OK, we send code 200 response, using json format
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({result:res}))
  }
  
  /**
   ** isNumeric returns true if input is a number. This can be done using the oppsite behaviour from isNaN function
   **/
  function isNumeric(num) {
    //isNaN returns false if the input is a number, true otherwise
    return !isNaN(num)
  }
  
  //In this line we export the functions to be used in other javascript files. We must import this module with 'require' signature
  module.exports.fibonacci = fibonnaci;
  