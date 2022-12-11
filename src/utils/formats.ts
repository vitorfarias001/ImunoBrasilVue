export function FormatDateTime(date:Date, includeSecs:boolean):string{
    if(date != null)
      return FormatDate(date) + " " + FormatTime(date, includeSecs);
    else
    return ""
  }
  
  export function FormatDate(date:Date):string{
      if(date != null)
          return getDateFormatted(date)+"/"+getMonthFormatted(date)+"/"+date.getFullYear();
      else
          return ""
  }
  
  export function FormatTime(date:Date, includeSecs:boolean):string{
      if(date != null)
          return getHourFormatted(date)+":"+getMinuteFormatted(date)+ (includeSecs ? "/"+getSecondsFormatted(date) : "");
      else
          return ""
  }
  
  export function getHourFormatted(date:Date):string {
      var hour = date.getHours();
      return (hour < 10 ? '0' + hour : hour).toString();
  }
  
  export function getSecondsFormatted(date:Date):string {
      var second = date.getSeconds();
      return (second < 10 ? '0' + second : second).toString();
  }
  
  export function getMinuteFormatted(date:Date):string {
      var minute = date.getMinutes();
      return (minute < 10 ? '0' + minute : minute).toString();
  }
  
  export function getMonthFormatted(date:Date):string {
      var month = date.getMonth() + 1;
      return (month < 10 ? '0' + month : month).toString();
  }
  
  export function getDateFormatted(date:Date):string {
      var day = date.getDate();
      return (day < 10 ? '0' + day : day).toString();
  }
  
  export function FormatMoney(value:number):string{
      return (value / 100).toFixed(2);
  }
  
  export function FormatPercent(value:number):string{
      return (value / 100).toFixed(2);
  }