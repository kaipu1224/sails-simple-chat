/**
 * ExampleController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  index : function(req, res){
    var param = req.param("message");
    if(!param){
        param = "hi everyone!";
    }

    var retData = {message:param, success:true};

    res.broadcast("", retData, "message");

    res.json(retData);
  },
};
