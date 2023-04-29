
{/* Formate le temps stocké dans la BDD au format "m:ss:fsfsfs" */}
export function formatTime(timeInMs) {
    const date = new Date(timeInMs);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
}

export function formatDate(dateTime) {
    const date = new Date(dateTime);
    return date;
}