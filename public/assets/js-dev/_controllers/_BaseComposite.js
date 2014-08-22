/*
 * A collection of many views. that makes up a page.
 */

 define([
    'jQuery',
    'BaseView',
    'GlobalConfig',
    'GlobalClasses',
    'GlobalEvents',
    'Handlebars',
    'text'
  ], function(
    $,
    BaseView,
    Config,
    Classes,
    Events,
    Handlebars
  ){

  return BaseView.extend({
    _Name      : "Base Composite", // just a reference for debugging.
    _Model     :  { 
                    id          : 'some-div-id',
                    title       : 'base composite', 
                    description : 'model can also be a string value require will look for' 
                  },
    _Template  :  'composites/gridtemplate.handlebars',
    _AppendTo  : 'body',

    init : function() {              
      this._super();
    },

    /* 
     * Override completely the bind events not even adding the super.
     */
    bindEvents : function() {
      this.$doc.on(Events.app.stateChange, this.stateChange.bind(this));
      this.$doc.on(Events.composite.resize, this.resize.bind(this));
    },
    
    didInsertElement : function() {
      // this.$el is now created and inserted into the DOM.
      
      // after insertion we bind events:
      this._super();

      // we can load in different views now:
      
      
    },

    resize : function(w,h) {
      trace('- RESIZE COMPOSITE -');

      // dispatch and resize ALL views:
      this.$doc.trigger(Events.view.resize,[w,h]);
    }

  })

});