import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO */}
                <div className={cx('logo-wrapper')}>
                    <a href="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </a>
                </div>
                {/* SEARCH BAR */}
                <div className={cx('searchBar')}>
                    <form className={cx('searchBar_inner')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={solid('xmark-circle')} />
                        </button>
                        <span></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={solid('magnifying-glass')} />
                        </button>
                    </form>
                </div>
                {/* ACTIONS */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
