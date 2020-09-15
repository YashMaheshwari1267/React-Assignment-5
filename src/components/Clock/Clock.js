import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
    
    let [time, setTime] = useState('00:00:00');
    let [period, setPeriod] =useState('am');
    let [displayDate, setDisplayDate] =useState('');

    useEffect(() => {
        getTime();
    }, [] );
    
    const getTime = () => {
        const takeTwelve = n => n > 12 ?  n  - 12 : n;
        const addZero = n => n < 10 ? "0" + n : n;
         
        setInterval(() => { 
            let d, h, m, s, t, amPm;
            d = new Date();
            h = addZero(takeTwelve(d.getHours())); 
            m = addZero(d.getMinutes()); 
            s = addZero(d.getSeconds());
            t = `${h}:${m}:${s}`;
            amPm = d.getHours() >= 12 ? "pm" : "am";
            setTime(t);
            setPeriod(amPm);
            
        }, 1000);
    
    }

    const toggleCheck = () => {
        if (document.getElementById("toggle-button").checked === true ){
            let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let todayDate = new Date();
            let day = days[todayDate.getDay()];
            let date = day + ' ' + todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
            setDisplayDate(date);
        }
        else {
            setDisplayDate('');
        }  
    }

    return(
        <div className="clock">
            <div className="outer-body">
                <img src="clock.svg" height="35px" width="35px" /><h2> Digital Clock</h2>
            </div>
            <div className="inner-body">    
                <label className="switch">
                        <input type="checkbox" id="toggle-button" onChange={toggleCheck} />
                        <span className="slider round"></span>
                </label>
                <span><img src="calendar.svg" /></span>
                <p className="date"> {displayDate} </p>
            </div>
            <div className="clock-body">    
                <div className="most-inner">
                    <span className="time"> { time } </span>
                    <span className="amPm"> { period } </span>
                </div>
            </div>
            
        </div>
   )
}


export default Clock;