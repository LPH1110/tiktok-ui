import classNames from 'classnames/bind';
import { Children } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, type, onClick, size, children, disabled, leftIcon, rightIcon, className, ...restProps }) {
    let Component = 'button';
    const props = {
        onClick,
    };

    const classes = cx('wrapper', {
        [size]: size,
        [className]: className,
        [type]: type,
        disabled,
        rightIcon,
        leftIcon,
    });

    if (href) {
        props.href = href;
        props.target = '_blank';
        Component = 'a';
    } else if (to) {
        props.to = to;
        Component = Link;
    } else if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Component className={classes} {...props} {...restProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <p className={cx('title')}>{children}</p>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
