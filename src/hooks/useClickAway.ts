import { useEffect, useRef } from 'react';

type Props = {
    action: Function;
};
const useClickAway = ({ action }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            action(false, event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });
    return { ref };
};
export default useClickAway;