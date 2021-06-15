# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

def reverse_words(str)
    str.split(/(\s+)/).map(&:reverse).join
 end