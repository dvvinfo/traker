import { HOURS_IN_DAY } from './constants'

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

export function isUndefinedOrNull(value) {
  isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber() || isNull(value)
}
function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}
function isNumber(value) {
  return typeof value === 'number'
}

export function isHourValid(hour) {
  return typeof isNumber(hour) && hour >= 0 && hour < HOURS_IN_DAY
}

function isString(value) {
  return typeof value === 'string'
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}