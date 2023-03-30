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

export const getUnix = (date) => parseInt((date.getTime() / 1000).toFixed(0))