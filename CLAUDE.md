# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bookmarklet generator project that creates browser bookmarklets for URL manipulation. The bookmarklet adds specific query parameters to URLs based on the current website.

## Architecture

- **main.js**: Source JavaScript code for the bookmarklet. Contains the actual logic that runs in the browser.
- **build.js**: Build script that minifies main.js by removing newlines and extra whitespace, then outputs to bookmarklet.txt
- **bookmarklet.txt**: Generated bookmarklet code (minified), ready to be used as a browser bookmark URL

## Build Process

To build the bookmarklet:
```bash
node build.js
```

This reads main.js, minifies it, and outputs to bookmarklet.txt with console output.

## Code Structure

The bookmarklet logic in main.js:
- Uses an IIFE wrapper: `javascript:(function(){...})()`
- Creates a URL object from current page location
- Conditionally adds query parameters based on hostname/pathname
- Redirects to the modified URL

Current URL handlers:
- **google.com**: Adds `hl=en` and `gl=us` parameters
- **www.amazon.co.jp/s**: Adds `emi=AN1VRQENFRJN5` parameter

## Development Workflow

1. Edit main.js to modify bookmarklet logic
2. Run `node build.js` to generate the minified bookmarklet
3. Copy the output from bookmarklet.txt to use in browser
