<?php
/**
 * Find all overlaps in a series of intervals.
 *
 * @param array $series
 */
function findOverlaps(array $series) {
    $overlaps = [];

    $total = count($series);
    foreach ($series as $key => $itemToCompare) {
        for ($i=0; $i < $total; $i++) {
            if ($key === $i) {
                // skip if itemToCompare and item are the same
                continue;
            }

            $item = $series[$i];

            /*
             * We have an overlap if
             * 1. start1 <= start2
             * 2. start2 <= end1
             * 3. end1 <= end2
             */

            if ($itemToCompare[0] <= $item[0] &&
                $item[0] <= $itemToCompare[1] &&
                $itemToCompare[1] <= $item[1]
            ) {
                // push both items to result. We will filter out duplicates later.
                $overlaps[] = $itemToCompare;
                $overlaps[] = $item;
            }
        }
    }

    // remove all duplicates from final result
    $overlapsWithoutDup = array_unique($overlaps, SORT_REGULAR);
    // the array returned by array_unique can have out of order keys. Pluck values so we can get a nicely formatted array.
    $overlapsWithoutDup = array_values($overlapsWithoutDup);
    echo json_encode($overlapsWithoutDup) . "\n";
}

// output should be: [ [1, 3], [12, 14], [2, 4], [13, 15] ]
$testSeriesA = [
    [1, 3], [2, 4], [5, 10], [12, 14], [13, 15]
];

// output should be: [ [1, 3], [2, 4] ]
$testSeriesB = [
    [1, 3], [5, 8], [2, 4]
];

// output should be: [ [1, 3], [2, 4], [4, 8] ]
$testSeriesC = [
    [1, 3], [4, 8], [2, 4]
];

/*
 * Note: order does not matter when printing the output. If you care about order,
 * you can apply some sort to the final array.
 */

findOverlaps($testSeriesC);
