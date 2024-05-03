## Kata: LeastLarger (by JohanWiltink) [7 kyu]

### DESCRIPTION:

Task

Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes

Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example

`leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3`

`leastLarger( [4, 1, 3, 5, 6], 4 )  => -1`

---
### What I learnt:

1. A poorly worded task will significantly increase how it takes to get completed.
2. The array method .sort() will convert the array elements strings, then sorts them according to each character's Unicode code point value.
   The following comparison needs to be added:
   `(a, b) => a - b`
