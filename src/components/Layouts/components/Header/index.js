import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import KeyItem from '~/components/KeyItem';
import Menu from '~/components/Menu';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        id: 0,
        icon: <FontAwesomeIcon icon={solid('earth-asia')} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    id: 0,
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    id: 1,
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        id: 1,
        icon: <FontAwesomeIcon icon={regular('circle-question')} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={regular('keyboard')} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_NAVIGATIONS = [
    {
        id: 100,
        icon: <img src={images.user} alt="user" />,
        title: 'View profile',
        to: '/profile',
    },
    {
        id: 101,
        icon: <img src={images.tiktok} alt="tiktok" />,
        title: 'Get coins',
        to: '/get_coin',
    },
    {
        id: 102,
        icon: <img src={images.setting} alt="setting" />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        id: 103,
        icon: <FontAwesomeIcon icon={solid('arrow-right-to-bracket')} />,
        title: 'Log out',
        to: '/',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    const handleOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;
            default:
        }
    };
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
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
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
                </HeadlessTippy>
                {/* ACTIONS */}
                <div className={cx('actions')}>
                    <Button type="outline" size="medium" leftIcon={<FontAwesomeIcon icon={solid('plus')} />}>
                        <span className={cx('title')}>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn', 'message-btn')}>
                                    <img src={images.message} alt="message-icon" />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'inbox-btn')}>
                                    <img src={images.inbox} alt="inbox-icon" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button type="solid-primary" size="medium">
                                <span className={cx('title')}>Log in</span>
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_NAVIGATIONS : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <img
                                className={cx('profile-icon')}
                                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_100x100.jpeg?x-expires=1658466000&x-signature=pgTuwh5UCY4diKYZiwYRczHG9yI%3D"
                                alt="user"
                            />
                        ) : (
                            <button className={cx('menu')}>
                                <FontAwesomeIcon icon={solid('ellipsis-vertical')} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
