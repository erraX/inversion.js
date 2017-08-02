# inversion.js

[![npm version](https://badge.fury.io/js/inversionjs.svg)](https://badge.fury.io/js/inversionjs)
[![Build Status](https://travis-ci.org/erraX/inversion.js.svg?branch=master)](https://travis-ci.org/erraX/inversion.js)
[![dependencies](https://david-dm.org/erraX/inversion.js.svg)](https://travis-ci.org/erraX/inversion.js)
[![Inline docs](http://inch-ci.org/github/erraX/inversion.js.svg?branch=master)](http://inch-ci.org/github/erraX/inversion.js)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/erraX/inversion.js/issues)

> A lightweight DI and IOC container to register service into service center

## Introduction
A lightweight DI and IOC container to register service into service center

## Installation

inversion.js can be used in a browser or in a nodejs app. It can be installed via bower or npm:

```bash
> $ bower install inversionjs
```

```bash
> $ npm install inversionjs
```

## Simple example

```javascript
// Module A

function Foo(name, age) {
    this.name = name;
    this.age = age;
}

Foo.prototype.say = function () {
    console.log('My name:' + this.name + ', age: ' + this.age);
}

```

```javascript
// Registry

var registry = new Registry();

// Register A via deps
registry.register({
    name: 'moduleDeps',
    module: Foo,
    deps: ['zemin', 'infinity']
});

// Register B via factory
registry.register({
    name: 'moduleFactory',
    module: Foo,
    deps: { name: 'zemin', age: 'infinity' }
    factory: function (registry, Module, deps) {
        return new Module(deps.name, deps.age);
    }
});

registry.get('moduleDeps').say()
registry.get('moduleFactory').say()

//    ==> `My name: zemin, age: infinity`
```

## Test

Test once
```bash
> $ npm run test
```

Or watch files changes
```bash
> $ npm run test:watch
```

## Build

Build umd
```bash
> $ npm run build:umd
```

Build umd min
```bash
> $ npm run build:umd:min
```

Build all
```bash
> $ npm run build
```

All built files will in `/dist/*`
