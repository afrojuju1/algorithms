<?php
/**
 * Problem to solve:
 * Steve has a string, inputString, consisting of lowercase English alphabetic letters. In one operation, he can delete any pair
 * of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after the first operation.
 * Steve wants to reduce the inputString as much as possible. To do this, he will repeat the above operation as many
 * times as it can be performed. Help Steve out by finding and printing inputString's non-reducible form!
 * Note: If the final string is empty, print 'Empty String'.
 * Input Format: a single string 'inputString'
 *
 * Example: input: aaabccddd
 *          output: abd
 * Example: input: aa
 *          output: Empty String
 * Example: input: baab
 *          output: Empty String
 */

/**
 * Reduces a string until it can no longer be reduced.
 *
 * @param string $inputString
 * @return string
 */
function reduceString($inputString) {

    $charArray = str_split($inputString);
    foreach ($charArray as $key => &$value) {
        if (($key + 1) < count($charArray) && $charArray[$key] === $charArray[$key + 1]) {
            unset($charArray[$key], $charArray[$key + 1]);
            $charArray = array_values($charArray);
        }
    }

    if (count($charArray) === 0) {
        return 'Empty String';
    }

    return implode("", $charArray);
}

$input = 'aaabccddd'; //output = abd
$output = reduceString($input);
echo "input: $input \noutput: $output\n";
