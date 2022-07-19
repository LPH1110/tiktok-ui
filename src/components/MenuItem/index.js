import classNames from 'classnames/bind';
import styles from '~/components/Menu/Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ to, icon, children }) {
    const classes = cx('menu-item');
    return (
        <Button className={classes} to={to} leftIcon={icon}>
            {children}
        </Button>
    );
}

export default MenuItem;
