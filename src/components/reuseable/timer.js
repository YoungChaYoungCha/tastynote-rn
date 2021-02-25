import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Timer({n}) {
  const [minutes, setMinutes] = useState(n);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  return (
    <Text>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
}
