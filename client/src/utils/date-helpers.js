export const isWeekend = day => {
    // 6 is saturday, 0 is sunday
    // return day % 7 === 6 || day % 7 === 0;
    return day === "Sat" || day === "Sun"
};

export const getDayName = (year, month, day) => {
    const date = new Date(Date.UTC(year, month, day));
    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
};

export const getDayNum = (year, month, day) => {
    const date = new Date(Date.UTC(year, month, day));
    return new Intl.DateTimeFormat("en-US", { weekday: "number" }).format(date);
};

export const daysInThisMonth = (num) => {
    // pass num because index needs to ++1 to get current month
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + num, 0).getDate();
};

export const getYear = () => {
    var now = new Date();
    return now.getFullYear();
};

export const getMonth = () => {
    var now = new Date();
    return now.getMonth();
};

export const getMonthName = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = getMonth();
    return monthNames[currentMonth];
};

// FILLER CODE FOR NOW, WILL OPTIMIZE LATER
export const fillFirstDays = (days) => {
    const numberDay = daysInThisMonth(0) + 1 - days[0].dayNumber
    const dayName = getDayName(getYear(), getMonth(0), numberDay)
    switch (days[0].day) {
        case 'Mon':
            break;
        case 'Tues':
            days.unshift(
                {
                    weekend: isWeekend(dayName),
                    day: 'Mon',
                    dayNumber: numberDay - 1,
                    year: getYear(),
                }
            )
            break;
        case 'Wed':
            days.unshift(
                {
                    weekend: isWeekend(dayName),
                    day: dayName,
                    dayNumber: numberDay - 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Tues",
                    dayNumber: numberDay,
                    year: getYear(),
                }
            )
            break;
        case 'Thurs':
            days.unshift(
                {
                    weekend: isWeekend(dayName),
                    day: dayName,
                    dayNumber: numberDay - 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Tues",
                    dayNumber: numberDay,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Wed",
                    dayNumber: numberDay + 1,
                    year: getYear(),
                },
            )
            break;
        case 'Fri':
            days.unshift(
                {
                    weekend: isWeekend(dayName),
                    day: dayName,
                    dayNumber: numberDay - 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Tues",
                    dayNumber: numberDay,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Wed",
                    dayNumber: numberDay + 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Thurs",
                    dayNumber: numberDay + 2,
                    year: getYear(),
                },
            )
            break;
        case 'Sat':
            days.unshift(
                {
                    weekend: isWeekend(dayName),
                    day: dayName,
                    dayNumber: numberDay - 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Tues",
                    dayNumber: numberDay,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Wed",
                    dayNumber: numberDay + 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Thurs",
                    dayNumber: numberDay + 2,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Fri",
                    dayNumber: numberDay + 3,
                    year: getYear(),
                },
            )
            break;
        case 'Sun':
            days.unshift(
                {
                    weekend: isWeekend(dayName),
                    day: dayName,
                    dayNumber: numberDay - 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Tues",
                    dayNumber: numberDay,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Wed",
                    dayNumber: numberDay + 1,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Thurs",
                    dayNumber: numberDay + 2,
                    year: getYear(),
                },
                {
                    weekend: false,
                    day: "Fri",
                    dayNumber: numberDay + 3,
                    year: getYear(),
                },
                {
                    weekend: true,
                    day: "Sat",
                    dayNumber: numberDay + 4,
                    year: getYear(),
                },
            )
            break;
        default:
            break;
    }
};

// NEED TO ADD END FILLER 