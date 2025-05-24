zeroclutter
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/zeroclutter.svg)](https://npmjs.org/package/zeroclutter)
[![Downloads/week](https://img.shields.io/npm/dw/zeroclutter.svg)](https://npmjs.org/package/zeroclutter)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g zeroclutter
$ zeroclutter COMMAND
running command...
$ zeroclutter (--version)
zeroclutter/0.0.0 darwin-arm64 node-v22.6.0
$ zeroclutter --help [COMMAND]
USAGE
  $ zeroclutter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zeroclutter hello PERSON`](#zeroclutter-hello-person)
* [`zeroclutter hello world`](#zeroclutter-hello-world)
* [`zeroclutter help [COMMAND]`](#zeroclutter-help-command)
* [`zeroclutter plugins`](#zeroclutter-plugins)
* [`zeroclutter plugins add PLUGIN`](#zeroclutter-plugins-add-plugin)
* [`zeroclutter plugins:inspect PLUGIN...`](#zeroclutter-pluginsinspect-plugin)
* [`zeroclutter plugins install PLUGIN`](#zeroclutter-plugins-install-plugin)
* [`zeroclutter plugins link PATH`](#zeroclutter-plugins-link-path)
* [`zeroclutter plugins remove [PLUGIN]`](#zeroclutter-plugins-remove-plugin)
* [`zeroclutter plugins reset`](#zeroclutter-plugins-reset)
* [`zeroclutter plugins uninstall [PLUGIN]`](#zeroclutter-plugins-uninstall-plugin)
* [`zeroclutter plugins unlink [PLUGIN]`](#zeroclutter-plugins-unlink-plugin)
* [`zeroclutter plugins update`](#zeroclutter-plugins-update)

## `zeroclutter hello PERSON`

Say hello

```
USAGE
  $ zeroclutter hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ zeroclutter hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/ZeroClutter/zeroclutter/blob/v0.0.0/src/commands/hello/index.ts)_

## `zeroclutter hello world`

Say hello world

```
USAGE
  $ zeroclutter hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ zeroclutter hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/ZeroClutter/zeroclutter/blob/v0.0.0/src/commands/hello/world.ts)_

## `zeroclutter help [COMMAND]`

Display help for zeroclutter.

```
USAGE
  $ zeroclutter help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zeroclutter.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `zeroclutter plugins`

List installed plugins.

```
USAGE
  $ zeroclutter plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zeroclutter plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/index.ts)_

## `zeroclutter plugins add PLUGIN`

Installs a plugin into zeroclutter.

```
USAGE
  $ zeroclutter plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zeroclutter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZEROCLUTTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZEROCLUTTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zeroclutter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zeroclutter plugins add myplugin

  Install a plugin from a github url.

    $ zeroclutter plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zeroclutter plugins add someuser/someplugin
```

## `zeroclutter plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zeroclutter plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zeroclutter plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/inspect.ts)_

## `zeroclutter plugins install PLUGIN`

Installs a plugin into zeroclutter.

```
USAGE
  $ zeroclutter plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zeroclutter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZEROCLUTTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZEROCLUTTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zeroclutter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zeroclutter plugins install myplugin

  Install a plugin from a github url.

    $ zeroclutter plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zeroclutter plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/install.ts)_

## `zeroclutter plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zeroclutter plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ zeroclutter plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/link.ts)_

## `zeroclutter plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zeroclutter plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zeroclutter plugins unlink
  $ zeroclutter plugins remove

EXAMPLES
  $ zeroclutter plugins remove myplugin
```

## `zeroclutter plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zeroclutter plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/reset.ts)_

## `zeroclutter plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zeroclutter plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zeroclutter plugins unlink
  $ zeroclutter plugins remove

EXAMPLES
  $ zeroclutter plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/uninstall.ts)_

## `zeroclutter plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zeroclutter plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zeroclutter plugins unlink
  $ zeroclutter plugins remove

EXAMPLES
  $ zeroclutter plugins unlink myplugin
```

## `zeroclutter plugins update`

Update installed plugins.

```
USAGE
  $ zeroclutter plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/update.ts)_
<!-- commandsstop -->
