import { HOURS_IN_DAY } from './constants'

export function generateTimelineItem() {
  const TimeLineItems = []
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    TimeLineItems.push({ hour })
  }
  return TimeLineItems
}
