<?php

/**
 * Check if a character is a vowel.
 *
 * @param string $char
 * @return bool
 */
function isVowel($char)
{
    $char = strtolower($char);
    return
        $char === 'a' ||
        $char === 'e' ||
        $char === 'i' ||
        $char === 'o' ||
        $char === 'u';
}

/**
 * Log results to console.
 *
 * @param string $inputString
 * @param string $outputString
 */
function logToConsole($inputString, $outputString)
{
    echo "input: $inputString \noutput: $outputString\n";
}

/**
 * Reverses all the vowels in a string.
 * eg: input: hello world
 *     output: hollo werld
 * eg: input: aeiou
 *     output: uoiea
 *
 * Complexity O(n)
 * @param string $inputString
 * @return string
 */
function reverseVowels($inputString)
{
    $chars = str_split($inputString);
    $vowelsFound = [];
    foreach ($chars as $char) {
        if (isVowel($char)) {
            $vowelsFound[] = $char;
        }
    }

    if (count($vowelsFound) === 0) {
        echo "No vowels found.\n";
        logToConsole($inputString, $inputString);
        return;
    }

    $index = count($vowelsFound) - 1;
    $outputChars = $chars;
    foreach ($chars as $key => $char) {
        if (isVowel($char)) {
            $outputChars[$key] = $vowelsFound[$index];
            $index--;
        }
    }

    // convert from array to string
    $outputString = implode('', $outputChars);
    logToConsole($inputString, $outputString);
}

$inputOne = 'aeiou';
$inputTwo = 'hello world';
$inputWithNoVowels = 'tht wld b hrd 2 mk ppl ndrstd';
reverseVowels($inputWithNoVowels);
