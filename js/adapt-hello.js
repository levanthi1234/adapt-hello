define([
  "core/js/adapt",
  "./dragndropView",
  "core/js/models/questionModel",
], function (Adapt, DragndropView, QuestionModel) {
  return Adapt.register("hello", {
    view: DragndropView,
    model: QuestionModel,
  });
});
