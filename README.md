Boomtrain is a predictive intelligence platform for marketers that leverages machine learning to drive increased clicks, engagement and revenue through customer communications. [Visit Website](http://boomtrain.com).

## Getting Started
When you turn on Boomtrain in Segment, this is what happens:
- Our snippet will start asynchronously loading Boomtrain's Javascript library onto your page.
- Once loaded, the Boomtrain Javascript library will automatically start sending "viewed" events to the Boomtrain system.
- When users visit pages on your site, the "viewed" events send to the Boomtrain system will trigger ingestion of your content and processing by our machine learning algorithms.
- To start sending custom events and user data, use the Javascript methods described below.

## Identify
When you call [`identify`](https://segment.com/docs/spec/identify) on analytics.js, we call `identify` on the Boomtrain Javascript library. A `userId()` must be specified.  For additional details about the Boomtrain `identify` method see [this article](https://boomtrain.readme.io/docs/identifyunique_userid) on the Boomtrain Developer Documentation.

## Track
When you call [`track`](https://segment.com/docs/spec/track), we will send the `event` you specify to the `track` method on the Boomtrain Javascript library, along with the properties you provide.  For additional details about the Boomtrain `track` method see [this article](https://boomtrain.readme.io/docs/track-an-activity-1) on the Boomtrain Developer Documentation.

## Settings
Segment lets you change these settings on the Integrations page, without having to touch any code.
### App ID
The App ID for your app can be taken from the integration guide provided by Boomtrain to your company.  For additional information about your App ID or integration details, contact your Boomtrain CSM or [support@boomtrain.com](mailto:support@boomtrain.com).


If you have any questions, or sueggestions on we can improve this documentation, feel free to [contact us](http://boomtrain.com/contact/).
