import AccountItem from '~/components/AccountItem';
import KeyItem from '~/components/KeyItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SearchBar.module.scss';

import classNames from 'classnames/bind';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import 'tippy.js/dist/tippy.css';
import { ClearIcon, LoadingIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const handleClearSearhValue = () => {
        setSearchValue('');
        setShowResult(false);
        inputRef.current.focus();
    };

    const handleClickInput = () => {
        if (searchValue.length > 0) setShowResult(true);
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setShowResult(true);
                setLoading(false);
            });
    }, [searchValue]);

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <KeyItem>hoa hướng dương</KeyItem>
                        <KeyItem>hoa_2319</KeyItem>
                        <KeyItem>hoa nguyễn</KeyItem>
                        <h4 className={cx('title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('wrapper')}>
                <form className={cx('inner')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onClick={handleClickInput}
                    />
                    {!loading && !!searchValue && (
                        <button type="button" className={cx('clear-btn')} onClick={handleClearSearhValue}>
                            <ClearIcon width="16" height="16" />
                        </button>
                    )}
                    {loading && <LoadingIcon width="16" height="16" className={cx('loading-icon')} />}
                    <span></span>
                    <button type="button" className={cx('search-btn')}>
                        <FontAwesomeIcon icon={solid('magnifying-glass')} />
                    </button>
                </form>
            </div>
        </HeadlessTippy>
    );
}

export default SearchBar;
