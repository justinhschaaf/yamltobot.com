## Creating a Bot User

To get started with YamlToBot, you must first create a bot user and have its token. If you have already done this, continue along. If you need to create one, you can follow [this guide](wiki/discord/Creating-a-Bot-User).

## Configuring YamlToBot

### Step 1

The first step to setting up YamlToBot is to run it for the first time. I'd recommend putting it in its own folder in a convenient location. Then double click on the Jar file. A new folder called "YamlToBot" should have generated.

![](assets/wiki/_images/discord/Getting-Started-1.png)

### Step 2

Navigate to the newly generated YamlToBot folder and open ```config.yml``` with your favorite text editor. We will be using [Notepad++](https://notepad-plus-plus.org/).

![](assets/wiki/_images/discord/Getting-Started-2.png)

### Step 3

This is one of the most important steps for configuring YamlToBot. If you do not do this step, YamlToBot might have errors reading your config file.

On the navigation bar, go to Settings and select "Preferences". Select "Language" in the lefthand column and under "Tab Settings", enable "Replace by Spaces". Then, click the "Close" button under that.

![](assets/wiki/_images/discord/Getting-Started-3.png)

### Step 4

As the last line of the default config, you should notice that there is a string ```token: 123456789012345678```. You want to replace the value on the right side of the colon (```123456789012345678```) with your bot's token. Then save the file by hitting Ctrl+S on your keyboard.

\*Note: As of version 2.0.0, the token can be stored in a separate configuration file if you are using a shared configuration as long as it is located in ```/discord/config.yml```

![](assets/wiki/_images/discord/Getting-Started-4.png)

### Step 5

Now we are going to add your bot to your server. Go back to your bot in the [Discord Developer Portal](https://discordapp.com/developers/applications/) and get your bot's id. 

![](assets/wiki/_images/discord/Getting-Started-5.1.png)

Now copy and paste the link ```https://discordapp.com/api/oauth2/authorize?client_id=123456789012345678&scope=bot&permissions=0``` into your web browser and replace ```123456789012345678``` with your bot's client id.

![](assets/wiki/_images/discord/Getting-Started-5.2.png)

### Step 6

Finally, run YamlToBot. Test out your bot by trying a command such as ```::ping```, or maybe the ```::help``` command.

![](assets/wiki/_images/discord/Getting-Started-6.png)