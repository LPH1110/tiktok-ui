import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            {/* Avatar */}
            <div className={cx('avatar')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1658314800&x-signature=hFkeodjPqXoujrpECMyfdaUuS7U%3D"
                    alt="avatar"
                    className={cx('avatar-img')}
                />
            </div>
            {/* Info */}
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>huynhhoa111</span>
                    <img src={images.checkCircle} alt="checkCircle" />
                </h4>
                <p className={cx('subName')}>huynh.hoa</p>
            </div>
        </div>
    );
}

export default AccountItem;
