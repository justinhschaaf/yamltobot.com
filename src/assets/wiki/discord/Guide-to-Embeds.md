**Please note! These features will only work for version 2.0.0 and above! Ensure that you are using the right version of YamlToBot for this to work!**

Whenever you post a link in a Discord chatroom, you may see a small box with a description of the webpage and a thumbnail image. As of YamlToBot 2.0.0, basic support for Discord embeds has been added. For more information about embeds, see the [Javacord wiki](https://javacord.org/wiki/miscellaneous/embed-faq/).

## Table of Options

Here are the currently supported configuration options for an embed.

| Value Name  | Type  | Description | Default |
|-------------|---------|--------------------------------------------------------------------------------------------------|---------------|
| enabled | boolean | Whether or not the embed is enabled. | false |
| title | String | The title of the embed that appears at the top. | "YamlToBot Embed" |
| color | String | The color of the bar that appears on the left of the embed. Only hexadecimal colors are supported at the moment. | "283F50" |
| image | String | The image placed within the embed. Should be a url. | null |
| url | String | The URL that the embed should link to if clicked on. | null |
| description | List | The text placed under the title of the embed. | "" |
| fields | Yaml List | The fields that should be added to the embed. See [field options](wiki/discord/Guide-to-Embeds#field-options) for more information | null |
| author | Yaml Mapping | The properties of the author of the embed. See [author options](wiki/discord/Guide-to-Embeds#author-options) for more information | null |

### Field Options

These are the different configuration options for fields.

| Value Name  | Type  | Description | Default |
|-------------|---------|--------------------------------------------------------------------------------------------------|---------------|
| name | String | The header placed before the field. | null |
| description | List | The text placed under the header in the field. | null |
| inline | boolean | Whether or not the field should be inline. | false |

### Author Options

These are the different configuration options when defining the author of an embed.

| Value Name  | Type  | Description | Default |
|-------------|---------|--------------------------------------------------------------------------------------------------|---------------|
| name | String | The author's name. Does not have to correlate with a Discord user's name. | null |
| url | String | The author's webpage. The user will be redirected to this site when the author's name is clicked. **If the author does not have a url defined, then they won't have an avatar either!** | null |
| avatar | String | The image that will appear as the author's avatar. Should be a url. | null |

## Creating a basic Embed

### Step 1

Navigate to the location of your main config file and open it with your preferred text editor (I will be using [Notepad++](https://notepad-plus-plus.org/)).

![](assets/wiki/_images/discord/Guide-to-Embeds-Embeds-1.png)

### Step 2

Add a new command to the list of commands. Give it a `name` and `description`. If you are using a shared config, you might want to consider adding in a `message` as well in case the command is run on a platform that doesn't support embeds.

```yaml
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
```

### Step 3

Add an `embed` element to the command. Inside it put an `enabled`, `title`, `color`, and `description` element.

```yaml
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
    embed:
      enabled: 
      title: 
      color: 
      description: 
        - 
```

### Step 4

Set `enabled` to `"true"` and define the other elements with what you wish them to be.

```yaml
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
    embed:
      enabled: "true"
      title: "My First Embed"
      color: "#5555dd"
      description: 
        - "This is an example of an embed using YamlToBot."
        - "Embed descriptions also support YAML sequences."
```

### Step 5

Run YamlToBot and make sure your embed works by running the `::embed` command in a server your bot has joined.

![](assets/wiki/_images/discord/Guide-to-Embeds-Embeds-5.png)

### Config

Your config file should now look something like this.

```yaml
activity: "YamlToBot"
commands: 
  - 
    description: "Play Ping Pong!"
    enabled: "true"
    message: 
      - "pong!"
    name: "ping"
  - 
    builtin: "true"
    description: "Shows a list of commands."
    enabled: "true"
    message: 
      - "Commands:"
      - "%cmd% | %desc%"
    name: "help"
    predefined-function: "%int%HelpCommand"
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
    embed:
      enabled: "true"
      title: "My First Embed"
      color: "#5555dd"
      description: 
        - "This is an example of an embed using YamlToBot."
        - "Embed descriptions also support YAML sequences."
name: "MyFirstBot"
prefix: "::"
```

## Adding a Field

Fields are paragraphs of text placed within the embed.

### Step 1

Add a `fields` element to your embed command. Add a new item to the list containing a `name`, `description`, and `inline` element.

```yaml
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
    embed:
      enabled: "true"
      title: "My First Embed"
      color: "#5555dd"
      description: 
        - "This is an example of an embed using YamlToBot."
        - "Embed descriptions also support YAML sequences."
      fields:
        -
          name: ""
          description:
            - ""
          inline: ""
```

### Step 2

Set the inline element to `true` or `false`, depending on whether or not you want the fields to be able to line up with each other. Set the other values to what you want them to be.

```yaml
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
    embed:
      enabled: "true"
      title: "My First Embed"
      color: "#5555dd"
      description: 
        - "This is an example of an embed using YamlToBot."
        - "Embed descriptions also support YAML sequences."
      fields:
        -
          name: "Field #1"
          description:
            - "This is an example of a field using YamlToBot."
            - "Field descriptions also support multiple lines."
          inline: "false"
```

### Step 3

Save the file and test your field by running the `::embed` command in a server where your bot has joined.

### Step 4

Add a new item to the list under `fields` to add a new field. Repeat Steps 2-4 for however many fields you want.

![](assets/wiki/_images/discord/Guide-to-Embeds-Fields-4.png)

### Config

```yaml
activity: "YamlToBot"
commands: 
  - 
    description: "Play Ping Pong!"
    enabled: "true"
    message: 
      - "pong!"
    name: "ping"
  - 
    builtin: "true"
    description: "Shows a list of commands."
    enabled: "true"
    message: 
      - "Commands:"
      - "%cmd% | %desc%"
    name: "help"
    predefined-function: "%int%HelpCommand"
  -
    name: "embed"
    description: "Show an embed."
    message: 
      - "Go to Discord if you want to see the embed!"
    embed:
      enabled: "true"
      title: "My First Embed"
      color: "#5555dd"
      description: 
        - "This is an example of an embed using YamlToBot."
        - "Embed descriptions also support YAML sequences."
      fields:
        -
          name: "Field #1"
          description:
            - "This is an example of a field using YamlToBot."
            - "Field descriptions also support multiple lines."
          inline: "false"
        -
          name: "Field #2"
          description:
            - "This is an example of an inline field."
          inline: "true"
        -
          name: "Field #3"
          description:
            - "As you can see, the fields are placed"
            - "next to eachother so that they can be"
            - "**best friends**."
          inline: "true"
name: "MyFirstBot"
prefix: "::"
```