"""Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty."""

#  My Solution


def find_smallest_int(arr):
    '''collect the array and make the
        initially make the minimum equal 
        the first item of the list''' 
    min_num = arr[0]
    
    '''compare the initial minimum value with
        the next number on the array and 
        if it is lower than the minimum value then 
        make it the minimum value'''
    for num in arr:
        if min_num > num:
            min_num = num
    return min_num


# Or Method 2


def smallest_int(arr):
    return int(min(arr))

print(smallest_int([2,4,6,-5,-50.5]))
print(find_smallest_int([2,4,6,-5,-50.5]))
