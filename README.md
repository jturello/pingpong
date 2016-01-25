# Ping-Pong

#### Behavior Driven Development Code Review, 01.25.2016

#### By James Turello

## Description

This project contains a webpage that takes numeric (integer) input from the user and displays a range of numbers from 1 to the number entered by the user with the following exceptions:
 * Numbers divisible by 3 (excluding those divisible by 15) are replaced with 'ping',
 * Numbers divisible by 5 (excluding those divisible by 15) are replaced with 'pong',
 * Numbers divisible by 15 are replaced with 'pingpong'
 * If the user leaves the input field blank or enters a number less than 1, an error message displays explaining that only positive integers are allowable input,
 * If the user enters a float (a number with a decimal portion), the number will be converted to an integer by stripping off the decimal portion of the number and processing the resulting integer normally


## Setup/Installation Requirements

* Clone this repository,
* Open file index.html in your browser


## Known Bugs

_There are no known bugs or issues_

## Technologies Used

* Bootstrap v3.3.6
* jQuery-v1.12.0.js
* All development and testing was done on Chrome v47 on Macs (OS X Yosemite / OS X El Capitan)

### License

This software is available for download under the MIT license

Copyright (c) 2016 - James Turello
