'use client'

import  { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2024-11-23T00:00:00"); // Set the event date
        const currentDate = new Date();
        const difference = eventDate.getTime() - currentDate.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            return { days, hours, minutes, seconds };
        } else {
            // If the date has passed, return all zeros
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(countdown);
    }, []);

    return (
        <div className="flex flex-wrap items-center p-4 md:justify-center justify-start h-full md:h-60 font-bold text-6xl space-x-6 md:space-x-12">
            <div className="ml-6 md:ml-0 flex flex-row items-center">
                <span className="outlined-text text-6xl md:text-8xl">
                    {timeLeft.days}
                </span>
                <span className="text-white font-bold ml-0 text-2xl md:text-4xl">
                    Days
                </span>
            </div>
            <div className="flex flex-row items-center">
                <span className="outlined-text text-6xl md:text-8xl">
                    {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-white font-bold ml-0 text-2xl md:text-4xl">
                    Hours
                </span>
            </div>
            <div className="flex flex-row items-center">
                <span className="outlined-text text-6xl md:text-8xl">
                    {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-white font-bold ml-0 text-2xl md:text-4xl">
                    Minutes
                </span>
            </div>
            <div className="flex flex-row items-center">
                <span className="outlined-text text-6xl md:text-8xl">
                    {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-white font-bold ml-0 text-2xl md:text-4xl">
                    Seconds
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;