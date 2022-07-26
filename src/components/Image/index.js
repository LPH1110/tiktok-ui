import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleOnError = () => {
        setFallback(images.userIcon);
    };

    return <img ref={ref} src={fallback || src} alt={alt} onError={handleOnError} {...props} />;
});

export default Image;
