/*global define */

define([
	'marionette'
], function (Marionette) {
	'use strict';

	return Marionette.AppRouter.extend({
		appRoutes: {
			'': 'areaPage',
			'page/:pageName': 'showPage',
            'hi': 'hello',
            'signup': 'signupPage',
            'profile': 'profilePage',
            ':userName/:services/:features': 'featuresPage',
            'services/:userName': 'servicesPage',
            'datacenter/features':'dataCenterFeaturesPage'
		}
	});
});
