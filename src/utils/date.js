export const parseDate = (dateInput) => {
    return `${dateInput.getDay()}/${dateInput.getMonth() + 1}/${dateInput.getFullYear()} - ${dateInput.getHours()}:${dateInput.getMinutes()}`
}
