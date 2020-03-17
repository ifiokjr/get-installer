# get-installer

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub Actions Build Status](https://github.com/ifiokjr/get-installer/workflows/Node%20CI/badge.svg)](https://github.com/ifiokjr/get-installer/actions?query=workflow%3A%22Node+CI%22)
[![Version][version]][npm]
[![Weekly Downloads][downloads-badge]][npm]
[![Typed Codebase][typescript]](./src/index.ts)
![MIT License][license]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<br />

> Get the type of the installer that is used at the directory provided whether `npm`, `yarn` or `pnpm`. Open to PR's for other options.

<br />

## Table of Contents

- [get-installer](#get-installer)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
    - [Setup](#setup)
    - [Code Example](#code-example)
  - [API](#api)
    - [`InstallerType`](#installertype)
    - [`getInstaller`](#getinstaller)
      - [Returns](#returns)
    - [`getInstallerSync`](#getinstallersync)
      - [Returns](#returns-1)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [License](#license)
  - [Contributors](#contributors)

<br />

## Usage

`get-installer` is designed to be used inside your node project.

<br />

### Setup

First, install the plugin and it's peer dependencies:

```bash
npm install --save get-installer
```

or

```bash
yarn add get-installer
```

<br />

### Code Example

The following will return the type of installer that is active at the given directory.

```ts
import { getInstallerSync } from 'get-installer';

const installer = getInstallerSync('/path/to/project');
```

The async method can also be used.

```ts
import { getInstaller } from 'get-installer';

const installer = await getInstaller('/path/to/project');
```

<br />

## API

### `InstallerType`

```ts
import { InstallerType } from 'get-installer';
```

The currently supported installers are `'yarn'`, `'npm'` and `'pnpm'`.

### `getInstaller`

```ts
import { getInstaller } from 'get-installer';
```

#### Returns

Returns a promise resolving to the `InstallerType`. Defaults to `'npm'` if it can't properly be resolved.

### `getInstallerSync`

```ts
import { getInstallerSync } from 'get-installer';
```

#### Returns

Returns the `InstallerType`. Defaults to `'npm'` if it can't properly be resolved.

<br />

## Contributing

Dive into the codebase with Gitpod.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ifiokjr/get-installer)

<br />

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/ifiokjr/get-installer/tags).

<br />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ifiokjr.com"><img src="https://avatars2.githubusercontent.com/u/1160934?v=4" width="100px;" alt=""/><br /><sub><b>Ifiok Jr.</b></sub></a><br /><a href="https://github.com/ifiokjr/get-installer/commits?author=ifiokjr" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[version]: https://flat.badgen.net/npm/v/get-installer
[npm]: https://npmjs.com/package/get-installer
[license]: https://flat.badgen.net/badge/license/MIT/purple
[size]: https://bundlephobia.com/result?p=#get-installer
[size-badge]: https://flat.badgen.net/bundlephobia/minzip/get-installer
[typescript]: https://flat.badgen.net/badge/icon/TypeScript/?icon=typescript&label&labelColor=blue&color=555555
[downloads-badge]: https://badgen.net/npm/dw/get-installer/red?icon=npm
