export default {
  verifyTime(startTime, endTime) {
    return this.onFormatDate(startTime) < this.onFormatDate(endTime);
  },
  onFormatDate(timeString) {
    return Date.parse(new Date(`${timeString}:00:00`));
  },
};
