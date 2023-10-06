import { useState, useEffect, useRef } from "react";

export function useServiceCount() {
    const [countService, set_countService] = useState(0);
    const [countingStarted, setCountingStarted] = useState(false);
    const intervalRef = useRef(null);
    let serviceCounting = 0;

    const serviceCount = () => {
        intervalRef.current = setInterval(() => {
            if (serviceCounting < 30) {
                serviceCounting++;
                set_countService(serviceCounting);
            } else {
                clearInterval(intervalRef.current);
            }
        }, 10);
    }

    const servicehandlerMouseEnter = () => {
        if(!countingStarted){
            serviceCount();
            setCountingStarted(true);
        };
    }

    useEffect(() => {
        // Clean up the interval when the component unmounts
        return () => {
        clearInterval(intervalRef.current);
        };
    }, []);

    return { countService, servicehandlerMouseEnter };
}

export function useUserCount() {
    const [countUser, set_countUser] = useState(0);
    const [countingStarted, setCountingStarted] = useState(false);
    const intervalRef = useRef(null);
    let userCounting = 0;

    const userCount = () => {
        intervalRef.current = setInterval(() => {
            if (userCounting < 150) {
                userCounting++;
                set_countUser(userCounting);
            } else {
                clearInterval(intervalRef.current);
            }
        }, 10);
    }

    const userhandlerMouseEnter = () => {
        if(!countingStarted){
            userCount();
            setCountingStarted(true);
        };
    }

    useEffect(() => {
        // Clean up the interval when the component unmounts
        return () => {
        clearInterval(intervalRef.current);
        };
    }, []);

    return { countUser, userhandlerMouseEnter };
}