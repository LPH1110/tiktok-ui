import Actions from '../Actions';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO */}
                <Logo />
                {/* SEARCH BAR */}
                <SearchBar />
                {/* ACTIONS */}
                <Actions />
            </div>
        </header>
    );
}

export default Header;
