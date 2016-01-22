var express = require('express'),
    router = express.Router(),
    corsJS = require('../cors'),
    _ = require('underscore');

var venueList = require('./../models/venuesList');
router.get('/api/ciscopispy/venues', function(req, res) {
    return res.json(venueList.venueList)
});
router.post('/hackathon/signup', function(req, res) {
    return res.json({
        success: true
    })
});

router.get('/area', function(req, res) {
    return res.json([{
        name: 'a1'
    }, {
        name: 'a2'
    }, {
        name: 'a3'
    }])
});

router.get('/device', function(req, res) {
    return res.json([{
        name: 'd1'
    }, {
        name: 'd2'
    }, {
        name: 'd3'
    }])
});
router.get('/state', function(req, res) {
    return res.json([{
        name: 's1'
    }, {
        name: 's2'
    }, {
        name: 's3'
    }])
});

router.get('/connections', function(req, res) {
    return res.json([{
        id: 1,
        name: 'praddep connection',
        area: 'a1',
        device: 'd2',
        state: 's3'
    },{
        id: 2,
        name: 'c2',
        area: 'a2',
        device: 'd1',
        state: 's5'
    }])
});
router.post('/connections/:id', function(req, res) {
    return res.json({success: true})
});
router.post('/hackathon/datacenter/:userName/profile', function(req, res) {
    return res.json({
        success: true
    })
});


router.get('/hackathon/:userName/service', function(req, res) {
    res.json([{
        name: 'UC',
        features: ['CUBE', 'CME', 'MGCP']

    }, {
        name: 'Security',
        features: ['PKI', 'SNORT']
    }]);
});
router.get('/hackathon/datacenter/:userName/:serviceName/:featureName/ciscoupdates', function(req, res) {
    res.json([{
        name: 'Support',
        features: [{
            name: 'Updates',
            subFeatures: ['Major Upadte on CUBE', 'Quality Increased']
        }],
        active: false
    }]);
});

router.get('/hackathon/datacenter/feature', function(req, res) {
    res.json([{
        name: 'CUBE',
        customers: ['Apple', 'Mango', 'Orange']

    }]);
});

router.post('/hackathon/datacenter/feature', function(req, res) {
    res.json({
        success: true
    });
});

router.get('/hackathon/:userName/:serviceName/:featureName', function(req, res) {
    res.json([{
        name: 'Features',
        features: [{
            name: 'SIP Trunks',
            subFeatures: []
        }, {
            name: 'Transcoding',
            subFeatures: []
        }, {
            name: 'SRTP',
            subFeatures: []
        }, {
            name: 'QOS',
            subFeatures: []
        }, {
            name: 'DTMF',
            subFeatures: []
        }, {
            name: 'Supplementary Services',
            subFeatures: []
        }, {
            name: 'Media renegotiation',
            subFeatures: []
        }],
        active: true

    }, {
        name: 'Notifications',
        features: [{
            name: 'Alarms',
            subFeatures: ['DSP Failure', 'Tracback']
        }, {
            name: 'Warning',
            subFeatures: ['High CPU']
        }, {
            name: 'Info',
            subFeatures: ['Up Time', 'Max Calls', 'Max Usage', 'Windows']
        }],
        active: false
    }, {
        name: 'TroubleShoot',
        features: [{
            name: 'Issues',
            subFeatures: ['Voice Path', 'Quality', 'DTMF', 'Others']
        }, {
            name: 'Devices',
            subFeatures: ['SJC-gtwy', 'BSTN-Gtwy', 'RTP-gtwy']
        }],
        active: false
    }]);
});

module.exports = router;
