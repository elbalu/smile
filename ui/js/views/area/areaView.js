/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/security/content
 */
define(['tpl!templates/area/areaView.html',
    'core/vent',
    'views/area/areas',
    'collections/areas',
    'views/connections/connections',
    'collections/connections',
    'models/connection'


], function(template, Vent, AreaCollectionView, AreaCollection, ConnectionCollectionView, ConnectionCollection, ConnectionModel ) {
    "use strict";

    var AreaView = Marionette.Layout.extend({

        el: '<div class="area-content-view"></div>',
        template: template,
        levelId: 'all',
        regions: {
            areaViewRegion: '.area-view',
            deviceViewRegion: '.device-view',
            stateViewRegion: '.state-view',
            connectionViewRegion: '.connection-view'
        },

        events: {
            'click .addConnection': 'addConnection'
        },
        initialize: function() {
            //this.listenTo(Vent, "update:area", this.loadArea);
        },
        onShow: function() {
            this.loadArea({
                levelId: this.levelId
            })
        },
        addConnection: function() {
            console.log('daf',$('#areaList').val());
            var _this = this;
            var connectionModel = new ConnectionModel({
                id: new Date(),
                name: $('.connectionName').val(),
                area: $('#areaList').val(),
                device: $('#deviceList').val(),
                state: $('#stateList').val()
            });
            connectionModel.save({},{
                method: 'POST',
                success: function(data, response) {
                    _this.onShow();
                }
            })
        },
        loadArea: function(options) {
            var areaCollection = new AreaCollection({
                    listType: 'area'
                }),
                _this = this;
            areaCollection.fetch({
                success: function(collection) {
                    _this.areaViewRegion.show(new AreaCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            });
            var deviceCollection = new AreaCollection({
                    listType: 'device'
                }),
                _this = this;
            deviceCollection.fetch({
                success: function(collection) {
                    _this.deviceViewRegion.show(new AreaCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            });
            var stateCollection = new AreaCollection({
                    listType: 'state'
                }),
                _this = this;
            stateCollection.fetch({
                success: function(collection) {
                    _this.stateViewRegion.show(new AreaCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            });
            var connectionCollection = new ConnectionCollection(),
                _this = this;
            connectionCollection.fetch({
                success: function(collection) {
                    console.log('collection', collection)

                    _this.connectionViewRegion.show(new ConnectionCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            });
        }

    });

    return AreaView;
});
