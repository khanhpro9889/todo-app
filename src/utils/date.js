export const parseDate = (dateInput) => {
    return `${dateInput.getDay()}/${dateInput.getMonth()}/${dateInput.getFullYear()} - ${dateInput.getHours()}:${dateInput.getMinutes()}`
}