import {useEffect, useState} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [width, setWidth] = useState(window.innerWidth);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 800);

    return {
        isMobile: isMobile,
    }
}