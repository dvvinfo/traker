import { HOURS_IN_DAY, BUTTON_TYPES } from './constants'

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
export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}
export function isHourValid(hour) {
  return typeof isNumber(hour) && hour >= 0 && hour < HOURS_IN_DAY
}
export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
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

function isString(value) {
  return typeof value === 'string'
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}
