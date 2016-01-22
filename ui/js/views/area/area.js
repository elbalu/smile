/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/partner-apps/con
tent
 */
define(['tpl!templates/area/area.html',
    'core/vent'
], function(template, Vent) {
    "use strict";

    return Backbone.Marionette.ItemView.extend({
        // childView: ChildView,

        template: template,
        el: '<option>',
        ui: {
            list: '.AreaItem'
        },
        initialize: function() {
        }

    });

});
