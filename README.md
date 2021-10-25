# WEBGL (HEADLESS) -> QT Canvas (NATIVE) by notchris

## Install
* Note: `npm i` can take like 5 minutes to resolve because headless-gl needs to be rebuilt for node v16 and qt-core then has to be recompiled and it doesn't print a status message and it's pretty annoying.

## Run
`npm run start`
* AND BAM -> A native webgl render via headless GL. 

## Why?

Because a lot of libraries only have a drawing context as a dependency. If you shim out calls to document and window then you don't need a browser at all!

* Is it faster than Electron?
- Yes, but it would be way faster if I port QT's GL content and pass the pixel dats as a buffer instead of copying the pixels to a QPainter.