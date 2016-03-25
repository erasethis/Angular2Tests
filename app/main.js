System.register(['angular2/platform/browser', './story.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, story_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (story_component_1_1) {
                story_component_1 = story_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(story_component_1.StoryComponent)
                .then(function (success) { return console.log('Bootstrap success'); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map