/**
 * History.js jQuery Adapter
 * @author Matias Meno <m@tias.me>
 * @copyright 2012 Matias Meno <m@tias.me>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

// Closure
  "use strict";

  // Localise Globals
  var
    History = {},
    $ = require('jquery-joules'),
    bean = require('bean');

  // Check Existence
  if ( typeof History.Adapter !== 'undefined' ) {
    throw new Error('History.js Adapter has already been loaded...');
  }

  // Add the Adapter
  History.Adapter = {
    /**
     * History.Adapter.bind(el,event,callback)
     * @param {Element|string} el
     * @param {string} event - custom and standard events
     * @param {function} callback
     * @return {void}
     */
    bind: function(el,event,callback){
      var El = typeof el === 'string' ? $(el) : el;
      bean.add(El, event,callback);
    },

    /**
     * History.Adapter.trigger(el,event)
     * @param {Element|string} el
     * @param {string} event - custom and standard events
     * @param {Object=} extra - a object of extra event data (optional)
     * @return {void}
     */
    trigger: function(el,event,extra){
      var El = typeof el === 'string' ? $(el) : el;
      bean.fire(El,event,extra);
    },

    /**
     * History.Adapter.extractEventData(key,event,extra)
     * @param {string} key - key for the event data to extract
     * @param {string} event - custom and standard events
     * @return {mixed}
     */
    extractEventData: function(key,event){
      var result = (event && event[key]) || undefined;
      return result;
    },

    /**
     * History.Adapter.trigger(el,event,data)
     * @param {function} callback
     * @return {void}
     */
    onDomLoad: function(callback) {
      $.domReady(callback);
    }
  };

  // Try and Initialise History
  if ( typeof History.init !== 'undefined' ) {
    History.init();
  }

module.exports = History;

