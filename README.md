# _Mr. Roboger's Neighborhood_

#### By _**Matt Stroud**_
##### _Last Updated April 3, 2020_

## Description

_An independent project from Epicodus._  
_This application takes a number as input, and displays a list of numbers from 0 to the number_  
_With the following exceptions, from least to most important:_  
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_  
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_  
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_

## Specs

| Behavior                                                                                          | Input   | Output                                                |
|:--------------------------------------------------------------------------------------------------|:-------:|------------------------------------------------------:|
| The program returns an error if the input is not a number.                                        | "Hello" | Error                                                 |
| The program returns a range of numbers from 0 to the users inputted number.                       | 4       | 0,1,2,3,4                                             |
| The program returns "Won't you be my neighbor?" instead of the current number if it contains a 3. | 3       | 0, 1, 2, "Won't you be my neighbor?"                  |
| The program returns "Boop!" instead of the current number if it contains a 2.                     | 5       | 0, 1, "Boop!", "Won't you be my Neighbor?", 4, 5      |
| The program returns "Beep!" instead of the current number if it contains a 1.                     | 2       | 0, "Beep!", "Boop!"                                   |
| The program clears all displayed results whenever the user enters another number.                 | 1 -> 2  | 0, "Beep!" -> 0, "Beep!", "Boop!"                     |
| The program inserts the user's name to the result if the number is divisible by 3.                | 3       | 0, "Beep!", "Boop!", "Won't you be my neighbor, Dana? |
| The program reverses the output if user selects the appropriate option.                           | 2       | "Boop!", 1, 0                                         |

## Known Bugs

* inserting user's name into the output not currently implemented.

## Setup/Installation Requirements

* Clone this repository.
* Navigate to index.html file.
* Right click and open in the browser of your choice.

## View Online

* View at https://mlstroud.github.io/mr-rogers-neighborhood

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **Matt Stroud**