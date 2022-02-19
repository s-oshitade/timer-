//Purpose: Function alarmFxn converts positive numbers from CLI to system beep sounds in milli seconds.
const alarmArray = process.argv.slice(2);
const alarmFxn = function(alarms) {
  for (const alarm of alarms) {
    if (alarm >= 0 && !isNaN(alarm)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarm * 1000); //convert input data from secs to milli secs
    }
  }
};

alarmFxn(alarmArray);
