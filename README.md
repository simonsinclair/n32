# n32

> Express numbers in a form that can be conveniently and accurately transmitted between humans and computers.

## Install

```sh
npm i @simonsinclair/n32
```

## Usage

```js
const { default: n32 } = require('@simonsinclair/n32');

const randomNumber = 123456789;
const friendlyId = n32(randomNumber);

console.log(friendlyId);
```

```js
'3nqk8n';
```

## API

### n32(number)

Returns a string.

#### number

Type: `number`.

The number to express.

## Supported browsers

IE11, and all modern browsers.
