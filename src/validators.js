import { HOURS_IN_DAY } from './constants'

export function isTimelineItemValid(timelineItem) {
  return (
    typeof timelineItem.hour === 'number' &&
    timelineItem.hour >= 0 &&
    timelineItem.hour < HOURS_IN_DAY
  )
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}
