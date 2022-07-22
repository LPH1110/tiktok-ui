import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

/*

- Sử dụng mảng để thể hiện trạng thái phân cấp dữ liệu
- Truyền mảng vào menu từ header layout
- Sử dụng state history để lưu lại luồng dữ liệu menu
- Sử dụng current để trỏ tới menu hiện tại cho việc render
- Kiểm tra current có children thì pass onClick functions
để setHistory khi click vào current item sẽ add children 
vào history và re-render lại menu là children

    [
        {
            data: items = [
                item 1: {
                    children: {

                    }
                },
                item 2,
                item 3
            ]
        },
        {
            title:,
            data: [
                subItem 1,
                subItem 2,
                subItem 3
            ]

        }
    ]
*/

function Menu({ items, children, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item) => {
            const hasChildren = !!item.children;

            return (
                <MenuItem
                    data={item}
                    key={item.id}
                    onClick={() => {
                        if (hasChildren) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                heading={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
