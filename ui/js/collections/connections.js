/*jslint white:true,indent:false*/
/*global Backbone*/
/**
 * collection/kpis
 */
define(['models/connection', 'config'], function(ConnectionModel, Config) {

    "use strict";

    /**
     * Connections
     *
     * @type {Backbone.Collection}
     */
    var Connections = Backbone.Collection.extend({
        initialize: function(options) {
        },
        model: ConnectionModel,

        url: function() {
            return Config.url() + 'connections' ;
        }
    });

    return Connections;
});
