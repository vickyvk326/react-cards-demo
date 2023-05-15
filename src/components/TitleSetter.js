import { useEffect } from 'react';

const TitleSetter = () => {
    useEffect(() => {
        document.title = 'Friends in react cards';
      }, []);
}

export default TitleSetter