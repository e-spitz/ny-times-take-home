export const formatDate = (date) => {
    const splitDate = date.split('T')
    const newDate = splitDate[0].split('-').reverse().join('-')
    return newDate
  }
