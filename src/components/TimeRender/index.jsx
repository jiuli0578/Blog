import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";

const TimeRender = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const zeroFill = (time) => String(time).padStart(2, '0');

    const updateIfChanged = (newValue, stateSetter) => {
        if (newValue !== stateSetter) {
            stateSetter(newValue);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const timeEnd = Date.now();
            const timesStart = dayjs('2023-11-25 00:00:00').valueOf();/* Define your timesStart value here */;
            const timeDifference = timeEnd - timesStart;

            const daysD = zeroFill(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
            const hoursD = zeroFill(
                Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            );
            const minutesD = zeroFill(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
            const secondsD = zeroFill(Math.floor((timeDifference % (1000 * 60)) / 1000));

            updateIfChanged(daysD, setDays);
            updateIfChanged(hoursD, setHours);
            updateIfChanged(minutesD, setMinutes);
            updateIfChanged(secondsD, setSeconds);
/*
            console.log(
                `本站已稳定运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒🏄`
            );*/
        }, 1000);

        // 在组件卸载时清除定时器，以防止内存泄漏
        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]); // 仅在相关状态发生变化时重新运行 useEffect

    return (
        <div>
            {`本站已稳定运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒🏄`}
        </div>
    );
};

export default TimeRender;