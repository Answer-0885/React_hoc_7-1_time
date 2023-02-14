import moment from "moment";
const IsMoment = (date) => {

    let wordForm = (num, word) => {
      let cases = [2, 0, 1, 1, 1, 2];
      return word[(num % 100 > 4 && num % 100 < 20) ? 2 :
      cases[(num % 10 < 5) ? num % 10 : 5]]; // проверка, чтобы подобрать правильное окончание.
   }
  
    const mDate = moment(date, 'YYYY-MM-DD HH:mm:ss')
    const mins = moment().diff(mDate, 'minutes');
    const hours = moment().diff(mDate, 'hours');
    const days = moment().diff(mDate, 'days');
    const month = moment().diff(mDate, 'month');
    const years = moment().diff(mDate, 'years');
  
    if (mins < 60 ) return `${mins + wordForm(mins, [' минута назад ', ' минуты назад ', ' минут назад '])}`;
    if (hours < 24 ) return `${hours + wordForm(hours, [' час назад ', ' часа назад ', ' часов назад '])}`;
    if(days < 30) return `${days + wordForm(days, [' день назад ', ' дня назад ', ' дней назад '])}`;
    if(month < 12) return `${month + wordForm(month, [' месяц назад ', ' месяца назад ', ' месяцев назад '])}`;
    return `${years + wordForm(years, [' год назад ', ' года назад ', ' лет назад '])}`;
  }
  export default IsMoment;

