
var axios = require("axios");


var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";


var helper = {


  runQuery: function(location) {

    console.log(location);

  
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    return axios.get(queryURL).then(function(response) {
    
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
     
      return "";
    });
  },

  
  getHistory: function() {
    return axios.get("/api");
  },

 
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};


module.exports = helper;
