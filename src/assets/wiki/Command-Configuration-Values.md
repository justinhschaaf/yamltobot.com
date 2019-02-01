| Value Name  | Type  | Description | Module | Default |
|-------------|---------|--------------------------------------------------------------------------------------------------|---------------|---------------|
| name | String  | The name of the command. The command will be executed by adding your prefix to the beginning of the name. | Core | null |
| enabled | boolean | Whether or not the command is enabled. | Core | true |
| builtin | boolean | ~~Whether or not the command is a builtin command.~~ As of version 2.0.0, this has been removed. | Core | false |
| description | String  | The description of what the command does. Will be used in the help command. | Core | Generic Command |
| usage | String | How the command should be used. | Core | The name of the command. |
| message | List | The message that the command will return. ~~If the command uses multiple lines, the line must begin with ```%num%```, replacing "num" with the number it is in the list. This is the current system in order to work around [Camel](https://github.com/decorators-squad/camel)'s automatic list sorting, and will be removed once it is changed.~~ As of version 2.0.0, this is no longer an issue. | Core | null |
| predefined-function | String | The predefined function to execute with this command. It must start with the ```%int%``` tag if it is internal, e.g. ```%int%HelpCommand```, or the ```%ext%``` tag if it is user-defined, located in the ```YamlToBot/cmds``` folder. | Core | null |
| embed | List | The configuration options to send a Discord embed rather than a normal message. For more on how to use embeds, visit the [Guide to Embeds](wiki/discord/Guide-to-Embeds).  | Discord | null |