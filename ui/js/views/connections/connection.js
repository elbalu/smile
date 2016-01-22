/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/partner-apps/con
tent
 */
define(['tpl!templates/connections/connection.html',
    'core/vent'
], function(template, Vent) {
    "use strict";

    return Backbone.Marionette.ItemView.extend({
        // childView: ChildView,

        template: template,
        el: '<tr>',
        ui: {
            list: '.ConnectionItem'
        },
        initialize: function() {
            console.log('this.model', this.model)
        }

    });

});
