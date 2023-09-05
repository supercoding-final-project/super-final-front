import { useState } from 'react';

export function useFormattedTime() {
  const getCurrentFormattedTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${period} ${formattedHours}:${formattedMinutes}`;
  };

  const [formattedTime, setFormattedTime] = useState(getCurrentFormattedTime());

  return formattedTime;
}
