import classNames from 'classnames/bind';
import Header from './Header';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </React.Fragment>
    );
}

export default DefaultLayout;
