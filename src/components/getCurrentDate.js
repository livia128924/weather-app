import * as React from "react";

export function getCurrentDate(separator=' '){

    let newDate = new Date()
    let date = newDate.getDate();
    let dayOfWeek = newDate.toLocaleString('default', {weekday: 'long'});
    let month = newDate.toLocaleString("default", { month: "long" });
    let year = newDate.getFullYear();

    
    return `${dayOfWeek}${separator}${date}${separator}${month}${separator}${year}`
    }