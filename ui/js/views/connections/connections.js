/*jslint white:true,indent:false,unused:false*/
/**
 * view/connection/connections
 */
define(['tpl!templates/connections/connections.html',
    'core/vent',
    'views/connections/connection'
], function(template, Vent, ChildView) {
    "use strict";

    /**
     * @type {ProfileListView}
     */
    var Connections = Marionette.CompositeView.extend({

        el: '<div class="connection-group"></div>',
        itemView: ChildView,
        itemViewContainer: '#connectionList',
        template: template,
        modelEvents: {
            sync: "render"
        }

    });

    return Connections;
});
