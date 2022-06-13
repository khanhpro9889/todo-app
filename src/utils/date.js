export const parseDate = (dateInput) => {
    var dayInMonth = dateInput.getDate() < 10 ? `0${dateInput.getDate()}` : dateInput.getDate();
    var month = dateInput.getMonth() + 1 < 10 ? `0${dateInput.getMonth() + 1}` : dateInput.getDate() + 1;
    return `${dayInMonth}/${month}/${dateInput.getFullYear()} - ${dateInput.getHours()}:${dateInput.getMinutes()}`
}
