/**
 * HomeController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {
  /**
   * /home/index
   */ 
  index: function (req,res) {
    res.view({hello:'Hello sails!', items:[]});
  },

  search: function(req,res) {
      var text = req.param("text1");
      var list = [
        {name:'hoge1', age:20},
        {name:'hoge2', age:21},
        {name:'hoge3', age:22},
      ];

    if(req.isAjax){
      console.log("ajax search");
      console.log(text);
      res.json({success:true, hello:'Search ' + text, items:list});
    }else{
      console.log("post search");
      res.view('home/index',{hello:'Search ' + text, items:list});
    }
  }
};
