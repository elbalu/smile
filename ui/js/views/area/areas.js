/*jslint white:true,indent:false,unused:false*/
/**
 * view/area/areas
 */
define(['tpl!templates/area/areas.html',
    'core/vent',
    'views/area/area'
], function(template, Vent, ChildView) {
    "use strict";

    /**
     * @type {ProfileListView}
     */
    var Areas = Marionette.CompositeView.extend({

        el: '<span class="area-group"></span>',
        itemView: ChildView,
        itemViewContainer: '#areaList',
        template: template,
        modelEvents: {
            sync: "render"
        }

    });

    return Areas;
});
