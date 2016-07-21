'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integration = require('@segment/analytics.js-integration');
var tester = require('@segment/analytics.js-integration-tester');
var Boomtrain = require('../lib/');

describe('Boomtrain', function() {
  var analytics;
  var boomtrain;
  var options = {
    apiKey: '324fa582528ea3dbc96bd7e94a2d5b61'
  };

  beforeEach(function() {
    analytics = new Analytics();
    boomtrain = new Boomtrain(options);
    analytics.use(Boomtrain);
    analytics.use(tester);
    analytics.add(boomtrain);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    boomtrain.reset();
    // sandbox();
  });

  it('should have the right settings', function() {
    analytics.compare(Boomtrain, integration('Boomtrain')
      .global('_bt')
      .option('apiKey', ''));
  });

  describe('before loading', function() {
    beforeEach(function() {
      analytics.stub(boomtrain, 'load');
    });

    describe('#initialize', function() {
      it('should create the window._bt object', function() {
        analytics.assert(!window._bt);
        analytics.initialize();
        analytics.assert(window._bt);
      });

      it('should call #load', function() {
        analytics.initialize();
        analytics.called(boomtrain.load);
      });
    });
  });

  describe('loading', function() {
    it('should load', function(done) {
      analytics.load(boomtrain, done);
    });
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.once('ready', done);
      analytics.initialize();
    });

    describe('#identify', function() {
      beforeEach(function() {
        analytics.stub(window._bt.person, 'set');
      });

      it('should send an id', function() {
        analytics.identify('userId');
        analytics.called(window._bt.person.set, { id: 'userId' , email:'userId' });
      });

      it('should not send only traits', function() {
        analytics.identify({ trait: true });
        analytics.didNotCall(window._bt.person.set);
      });

      it('should send an id and traits', function() {
        analytics.identify('id', { trait: true, email: 'jaimal@boomtrain.com' });
        analytics.called(window._bt.person.set, { id: 'id', trait: true, email: 'jaimal@boomtrain.com' });
      });

      it('should call _bt.person.set with a specified email', function() {
        var user_id = 'fake_app_member_id';
        analytics.identify(user_id, { trait: true, email: 'jaimal@boomtrain.com' });
        analytics.called(window._bt.person.set, { trait: true, email: 'jaimal@boomtrain.com', id:user_id });
      });

      it('should call _bt.person.set with default email', function() {
        var user_id = 'fake_app_member_id';
        analytics.identify(user_id, { trait: true });
        analytics.called(window._bt.person.set, { trait: true, email: user_id, id: user_id });
      });

      it('should convert dates to unix timestamps', function() {
        var date = new Date();
        analytics.identify('id', { date: date });
        analytics.called(window._bt.person.set, {
          email: 'id',
          id: 'id',
          date: Math.floor(date / 1000)
        });
      });

      it('should alias created to created_at', function() {
        var date = new Date();
        analytics.identify('id', { createdAt: date });
        analytics.called(window._bt.person.set, {
          email: 'id',
          id: 'id',
          created_at: Math.floor(date / 1000)
        });
      });
    });

    describe('#page', function() {
      beforeEach(function() {
        analytics.stub(window._bt, 'track');
      });

      it('should get page URL and call _bt.track with correct model and ID', function() {
        analytics.page('Home Page', { url: 'https://marketingreads.com/deloitte-digital-buys-creative-agency-heat/', model: 'blog' });
        analytics.called(window._bt.track, 'viewed', { id: '602265785760ac3ae5c2bb6909172b2c', model: 'blog' });
      });
      it('should use specified model and ids without Name parameter', function() {
        analytics.page({ id:'test_id', model: 'blog' });
        analytics.called(window._bt.track, 'viewed', { id: 'test_id', model: 'blog' });
      });
    });
    describe('#track', function() {
      beforeEach(function() {
        analytics.stub(window._bt, 'track');
      });

      it('should send an event and properties', function() {
        analytics.track('viewed', { id: '602265785760ac3ae5c2bb6909172b2c', model: 'article' });
        analytics.called(window._bt.track, 'viewed', { id: '602265785760ac3ae5c2bb6909172b2c', model: 'article' });
      });
    });
  });
});
