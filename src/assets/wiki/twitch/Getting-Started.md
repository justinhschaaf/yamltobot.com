## Creating a Bot User

To get started with YamlToBot, you must first create a bot user and have its token. If you have already done this, continue along. If you need to create one, you can follow [this guide](wiki/twitch/Creating-a-Bot-User).

## Configuring YamlToBot

### Step 1

The first step to setting up YamlToBot is to run it for the first time. I'd recommend putting it in its own folder in a convenient location. Then double click on the Jar file. A new folder called "YamlToBot" should have generated.

![Run Initial Jar](assets/wiki/_images/twitch/Getting-Started-1.png)

### Step 2

Navigate to the newly generated YamlToBot folder and open config.yml with your favorite text editor. We will be using [Notepad++](https://notepad-plus-plus.org/).

![Config File Location](assets/wiki/discord/assets/Getting-Started-2.png)

### Step 3

This is one of the most important steps for configuring YamlToBot. If you do not do this step, YamlToBot might have errors reading your config file.

On the navigation bar, go to Settings and select "Preferences". Select "Language" in the lefthand column and under "Tab Settings", enable "Replace by Spaces". Then, click the "Close" button under that.

![Notepad++ Settings](assets/wiki/discord/assets/Getting-Started-3.png)

### Step 4

As the last line of the default config, you should notice that there is a string ```token: 123456789012345678```, a string ```id: 876543210987654321```, and a string ```secret: 135798642135798642```. You want to replace the value on the right side of the colon (123456789012345678) with your bot's token for the ```token``` section. Do the same for the other two mentioned sections with the corresponding value. Then save the file by hitting Ctrl+S on your keyboard.

![Configure token, id, and secret](assets/wiki/_images/twitch/Getting-Started-4.png)

### Step 5

You should also notice a ```channels``` list. Replace ```Jusanov``` with your own Twitch channel.

![Configure Channels](assets/wiki/_images/twitch/Getting-Started-5.png)

### Step 6

Finally, run YamlToBot. Go to the your Twitch channel and test out your bot by trying a command such as ::ping, or maybe the ::help command.