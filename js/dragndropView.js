define([
  "coreJS/adapt",
  "coreViews/questionView",
  "libraries/jquery-ui.min",
  "libraries/jquery.ui.touch-punch",
], function (Adapt, QuestionView, JQueryUI, TouchPunch) {
  var DragndropView = QuestionView.extend({
    /************************************** SETUP METHODS **************************************/
    setupQuestion: function () {
      console.log("a");
    },
  });

  return DragndropView;
});
