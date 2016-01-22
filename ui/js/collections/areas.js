/*jslint white:true,indent:false*/
/*global Backbone*/
/**
 * collection/kpis
 */
define(['models/area', 'config'], function(AreaModel, Config) {

    "use strict";

    /**
     * Areas
     *
     * @type {Backbone.Collection}
     */
    var Areas = Backbone.Collection.extend({
        initialize: function(options) {
            this.listType = options.listType;
        },
        model: AreaModel,

        url: function() {
            return Config.url() + this.listType ;
        }
    });

    return Areas;
});
