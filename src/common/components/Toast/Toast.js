import React, { useState, useEffect } from 'react';
import { Toast as BootstrapToast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { errorInfoSelector } from '../../redux/selectors';
import { setErrorInfo } from '../../redux';
import styles from './Toast.module.css';

const Toast = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const errorInfo = useSelector(errorInfoSelector);

  useEffect(() => {
    setShow(!!errorInfo);
  }, [errorInfo, setShow]);

  return (
    <BootstrapToast
      className={styles.Toast}
      onClose={() => dispatch(setErrorInfo(null))}
      show={show}
      delay={3000}
      autohide
    >
      <BootstrapToast.Header>
        <strong className="mr-auto">Ошибка</strong>
        <small>just now</small>
      </BootstrapToast.Header>
      <BootstrapToast.Body>{errorInfo}</BootstrapToast.Body>
    </BootstrapToast>
  );
};

export default Toast;
