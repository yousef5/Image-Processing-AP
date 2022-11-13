# Image Processing API (udacity NanoDegree)

## Overview

This Project can use to explore images in server and resize one image

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Build

`npm run build`

This script will compile typescript to javascript in build folder

### 3. Start the Server

`npm run start`

This script will start the project on port `3000`.

## Testing

`npm run test`

This script will compile typescript to javascript in build folder and start test

## Linting

`npm run lint`

## Endpoints

### `/images`

Method: `get`

For example: `localhost:3000/images`

### `/image/?imagename=<image_name>&imagewidth=<image_width>&imageheight=<image_heigth>`

Method: `get`
Query Param: `filename` - the specific image you are requesting - `height` and `width` - the height or width of the image in pixels.


#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

## Built With

-   [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
-   [Express](https://expressjs.com/) - The web framework.
-   [TypeScript](https://www.typescriptlang.org/) - The language used.
-   [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
