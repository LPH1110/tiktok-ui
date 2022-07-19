import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './KeyItem.module.scss';

const cx = classNames.bind(styles);

function KeyItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('icon')}>
                <FontAwesomeIcon icon={solid('magnifying-glass')} />
            </span>
            <p className={cx('keyword')}>{children}</p>
        </div>
    );
}

export default KeyItem;
