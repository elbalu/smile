/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/security/content
 */
define(['tpl!templates/connections/connectionView.html',
    'core/vent',
    'views/connections/connections',
    'collections/connections'


], function(template, Vent, ConnectionCollectionView, ConnectionCollection) {
    "use strict";

    var ConnectionView = Marionette.Layout.extend({

        el: '<div class="connection-content-view"></div>',
        template: template,
        levelId: 'all',
        regions: {
            connectionViewRegion: '.connection-view'
        },

        initialize: function() {
            //this.listenTo(Vent, "update:connection", this.loadConnection);
        },
        onShow: function() {
            this.loadConnection({
                levelId: this.levelId
            })
        },
        loadConnection: function(options) {
            var connectionCollection = new ConnectionCollection({
                    userName: JSON.parse(localStorage.getItem('user')).name
                }),
                _this = this;
            connectionCollection.fetch({
                success: function(collection) {
                    _this.connectionViewRegion.show(new ConnectionCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            })
        }

    });

    return ConnectionView;
});
