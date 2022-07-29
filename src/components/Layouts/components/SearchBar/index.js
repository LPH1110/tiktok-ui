import AccountItem from '~/components/AccountItem';
import KeyItem from '~/components/KeyItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SearchBar.module.scss';

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { ClearIcon, LoadingIcon } from '~/components/Icons';
import useDebounce from '~/hooks/useDebounce';
import * as searchService from '~/apiServices/searchService';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 600);

    const handleClearSearhValue = () => {
        setSearchValue('');
        setShowResult(false);
        inputRef.current.focus();
    };

    const handleClickInput = () => {
        if (searchValue.length > 0) setShowResult(true);
    };

    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);

            setSearchResult(result);
            setShowResult(true);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    return (
        /*
            Fix warning Tippy!!!

            Using a wrapper <div> tag around the reference element 
            solves this by creating a new parentNode context.
        */
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <KeyItem>hoa hướng dương</KeyItem>
                            <KeyItem>hoa_2319</KeyItem>
                            <KeyItem>hoa nguyễn</KeyItem>
                            <KeyItem>hoa nguyễn</KeyItem>
                            <KeyItem>hoa nguyễn</KeyItem>
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
                            onChange={handleInputChange}
                            onClick={handleClickInput}
                        />
                        {!loading && !!searchValue && (
                            <button type="button" className={cx('clear-btn')} onClick={handleClearSearhValue}>
                                <ClearIcon width="16" height="16" />
                            </button>
                        )}
                        {loading && <LoadingIcon width="16" height="16" className={cx('loading-icon')} />}
                        <span></span>
                        <button type="button" className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            <FontAwesomeIcon icon={solid('magnifying-glass')} />
                        </button>
                    </form>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchBar;
