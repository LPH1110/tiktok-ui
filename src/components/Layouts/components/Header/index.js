import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import KeyItem from '~/components/KeyItem';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);
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
                <Tippy
                    interactive
                    visible
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <KeyItem>hoa hướng dương</KeyItem>
                                <KeyItem>hoa_2319</KeyItem>
                                <KeyItem>hoa nguyễn</KeyItem>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                {/* ACTIONS */}
                <div className={cx('actions')}>
                    <Button type="outline" size="medium" leftIcon={<FontAwesomeIcon icon={solid('plus')} />}>
                        <span className={cx('title')}>Upload</span>
                    </Button>
                    <Button type="solid-primary" size="medium">
                        <span className={cx('title')}>Log in</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
