## Creating a Bot User

To get started with YamlToBot, you must first create a new Twitch account dedicated to your bot.

### Step 1

First, you must sign up for a new Twitch account. Go to the Twitch homepage and [create a new account](https://www.twitch.tv/signup) for your bot.

![Twitch Signup](assets/wiki/_images/twitch/Creating-a-Bot-User-1.png)

### Step 2

Go to the [Twitch Developer Dashboard](https://glass.twitch.tv/console/apps/create) and register a new app. 

![Twitch Developer Dashboard](assets/wiki/_images/twitch/Creating-a-Bot-User-2.1.png)

Give it a name, give it an OAuth Redirect URL of ```http://127.0.0.1:7090/oauth_authorize_twitch```, and set the category to Chat Bot. Then press the "Create" button.

![Register a new Application](assets/wiki/_images/twitch/Creating-a-Bot-User-2.2.png)

### Step 3

You should have been taken back to the [Twitch Developer Applications Dashboard](https://glass.twitch.tv/console/apps). Press the "Manage" button by your new application.

![Twitch Developer Application Dashboard](assets/wiki/_images/twitch/Creating-a-Bot-User-3.1.png)

Create a new client secret by pressing the "New Secret" button near the bottom of the page. Write this down, along with your Client ID, in a secure location. Your client secret will not be shown again.

![Twitch Client Secret](assets/wiki/_images/twitch/Creating-a-Bot-User-3.2.png)

### Step 4

Go to [this url](http://twitchapps.com/tmi/) to get your bot client's OAuth token. Press the "Connect to Twitch button on the main page. After that, your token should be shown on the screen. Write this down along with your client secret and your client id.

![OAuth Token Generator](assets/wiki/_images/twitch/Creating-a-Bot-User-4.png)
