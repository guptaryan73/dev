import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

document.querySelector(".currentZone").textContent = dayjs.tz.guess();

function updateCurrentTime() {
    document.getElementById("currentTime").textContent = dayjs().format('HH:mm:ss');
}

document.getElementById("currentDate").textContent = dayjs().format('dddd, DD MMMM, YYYY');
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
