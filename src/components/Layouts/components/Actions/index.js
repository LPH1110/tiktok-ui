import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    SettingIcon,
    TiktokIcon,
    UserIcon,
} from '~/components/Icons';
import Menu from '~/components/Menu';
import styles from './Actions.module.scss';

import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        id: 0,
        icon: <LanguageIcon />,
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
                {
                    id: 2,
                    type: 'language',
                    code: 'cn',
                    title: 'Trung Quốc',
                },
                {
                    id: 3,
                    type: 'language',
                    code: 'de',
                    title: 'Tiếng Đức',
                },
                {
                    id: 4,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 5,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 6,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 7,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 8,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 9,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 10,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 11,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 12,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 13,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
                },
                {
                    id: 14,
                    type: 'language',
                    code: 'do',
                    title: 'Cộng hòa Dominica',
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
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const USER_NAVIGATIONS = [
    {
        id: 100,
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        id: 101,
        icon: <TiktokIcon />,
        title: 'Get coins',
        to: '/get_coin',
    },
    {
        id: 102,
        icon: <SettingIcon />,
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

function Actions() {
    const currentUser = true;

    const handleOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Button type="outline" size="medium" leftIcon={<FontAwesomeIcon icon={solid('plus')} />}>
                <span className={cx('title')}>Upload</span>
            </Button>
            {currentUser ? (
                <>
                    <Tippy content="Messages" placement="bottom">
                        <button className={cx('action-btn', 'message-btn')}>
                            <MessageIcon />
                        </button>
                    </Tippy>

                    <Tippy content="Inbox" placement="bottom">
                        <button className={cx('action-btn', 'inbox-btn')}>
                            <InboxIcon />
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
                    <Image src={images.profilePicture} className={cx('profile-icon')} alt="user" />
                ) : (
                    <button className={cx('menu')}>
                        <FontAwesomeIcon icon={solid('ellipsis-vertical')} />
                    </button>
                )}
            </Menu>
        </div>
    );
}

export default Actions;
