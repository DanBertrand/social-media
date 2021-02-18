const year = (date) => parseInt(date.slice(0,4))
const month = (date) => parseInt(date.slice(5,7))
const day = (date) => parseInt(date.slice(8,10))
const hours = (date) => parseInt(date.slice(11,14))
const minutes = (date) => parseInt(date.slice(14,16))
const seconds = (date) => parseInt(date.slice(17,19))


export const sort = (response) => {

    return response.sort(function(element1, element2) {
        const date1 = element1.updated_at
        const date2 = element2.updated_at
        if (year(date1) > year(date2)) return -1;
        if (year(date1) < year(date2)) return 1;
        else{
          if (month(date1) > month(date2)) return -1;
          if (month(date1) < month(date2)) return 1;
          else{
            if (day(date1) > day(date2)) return -1;
            if (day(date1) < day(date2)) return 1;
            else{
              if (hours(date1) > hours(date2)) return -1;
              if (hours(date1) < hours(date2)) return 1;
              else{
                if (minutes(date1) > minutes(date2)) return -1;
                if (minutes(date1) < minutes(date2)) return 1;
                else{
                   if (seconds(date1) > seconds(date2)) return -1;
                   if (seconds(date1) < seconds(date2)) return 1;
                }
              }
            }
          }
       }
     })
}
