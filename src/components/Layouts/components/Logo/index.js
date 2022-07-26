import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('wrapper')}>
            <a href="/" className={cx('logo-link')}>
                <Image src={images.logo} alt="Tiktok" />
            </a>
        </div>
    );
}

export default Logo;
