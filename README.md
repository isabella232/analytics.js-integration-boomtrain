Boomtrain is a predictive intelligence platform for marketers that leverages machine learning to drive increased clicks, engagement and revenue through customer communications. [Visit Website](http://boomtrain.com).

## Getting Started
When you turn on Boomtrain in Segment, this is what happens:
- Our snippet will start asynchronously loading Boomtrain's API onto your page.
- Boomtrain will automatically start sending "viewed" events to our system.
- When users visit pages on your site, this will trigger the ingestion of your content and processing by our machine learning algorithms.
- To start sending custom events and user data, start using the API down below.

## Identify
When you call [`identify`](https://segment.com/docs/spec/identify) on analytics.js, we call `identify` on Boomtrain. A `userId()` must be specified.

## Track
When you call [`track`](https://segment.com/docs/spec/track), we'll send the `event` to Boomtrain's `track` call, along with the properties you provide.

## Settings
Segment lets you change these settings on the Integrations page, without having to touch any code.
### App ID
The App ID for your app can be taken from the integration guide provided by Boomtrain to your company, or through your connection at Boomtrain.  For additional information about your integration, contact your Boomtrain CSM or [support@boomtrain.com](mailto:support@boomtrain.com).


If you ever have any questions, or see anywhere we can improve our documentation, feel free to [contact us](http://boomtrain.com/contact/)!
