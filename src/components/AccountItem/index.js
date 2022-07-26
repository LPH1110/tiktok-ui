import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            {/* Avatar */}
            <div className={cx('avatar')}>
                <img src={data.avatar} alt={data.nickname} className={cx('avatar-img')} />
            </div>
            {/* Info */}
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <img src={images.checkCircle} alt="checkCircle" />}
                </h4>
                <p className={cx('subName')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
