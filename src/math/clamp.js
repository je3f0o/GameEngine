/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : clamp.js
* Created at  : 2019-05-02
* Updated at  : 2020-07-28
* Author      : jeefo
* Purpose     :
* Description :
* Reference   :
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.*/
// ignore:start
"use strict";

/* globals min, max*/
/* exported clamp*/

// ignore:end

/**
 * Clamps the given value between the given minimum and maximum values range.
 * Returns the given value if it is within the min and max range.
 *
 * @param {number} value - Value to restrict inside the range defined by the
 *   min and max values.
 * @param {number} min_value - Minimum value to compare against.
 * @param {number} max_value - Maximum value to compare against.
 *
 * @returns {number} - Result between the min and max values.
 */
const clamp = (value, min_value, max_value) => {
    return min(max(value, min_value), max_value);
};
