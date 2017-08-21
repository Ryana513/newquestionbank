const Questions = require("../models/questions.model");

exports.get = function(req, res, next) {
  Questions.find({})
    .sort({ updatedAt: "desc" })
    .limit(25)
    .exec(function(err, payload) {
      //this is our return from the query, hopfully with data!!!!
      if (err) next(err);
      res.render("questionList", {
        questions: payload,
        title: "List of Fancy Questions"
      });
    });
};
