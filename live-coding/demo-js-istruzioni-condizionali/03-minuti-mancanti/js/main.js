'use strict';

const now = new Date();

const minuteInHour = 60;
const minute = now.getMinutes();
const remainMinutes = minuteInHour - minute;

console.log('Mancano minuti: ', remainMinutes);
