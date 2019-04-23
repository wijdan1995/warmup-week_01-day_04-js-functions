# Leap Year Warmup Exercise

Create a file named `leapYear.js`.

Write a function that will take any given year and return whether it is a leap year or not.

Remember that a leap year is:

- Every year that is evenly divisible by 4
- Except if it is evenly divisible by 100...
- Unless it is also divisible by 400 

Test Data...  Make sure it is working!

- 1997 is not a leap year, it should return **false**
- 1996 is a leap year, it should return **true**
- 1900 is not a leap year, it should return **false**
- 2000 is a leap year, it should return **true**

How to structure it...
- We want a custom function called `isLeapYear` that accepts a parameter of a year and returns `true` or `false`.
- `isLeapYear(1997) // false`
- `isLeapYear(1996) // true`
- `isLeapYear(1900) // false`
- `isLeapYear(2000) // true`

Bonus!

- Return a message if the user passes in a data type that is not a number
- Return a message if the user passes in a date that is before 0
- Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE
