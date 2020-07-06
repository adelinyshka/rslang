import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { setSettings } from '../../redux';
import SettingsSelector from '../../redux/selectors';

import styles from './Settings.module.css';

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector(SettingsSelector);
  // так как изменения происходят при нажатии кнопки сохранить
  // - использую локальный стейт для изменения настроек
  const [formSettings, setFormSettings] = useState(settings);

  const handleChange = useCallback((event) => {
    const {
      name, type, checked, value,
    } = event.target;
    const newFormSettings = { ...formSettings };
    newFormSettings[name] = type === 'checkbox' ? checked : value;
    setFormSettings(newFormSettings);
  }, [formSettings, setFormSettings]);

  const handleSubmit = useCallback(() => {
    dispatch(setSettings(formSettings));
  }, [dispatch, formSettings]);

  const cancelSubmit = useCallback(() => {
    setFormSettings(settings);
  }, [setFormSettings, settings]);

  return (
    <form className={styles.Settings}>
      <div className={styles.CardsAmount}>
        <h1>Количество карточек</h1>
        <div className={styles.CardsAmountForm}>
          <label htmlFor="newCardsAmount">
            Новых слов в день
            <input
              type="number"
              name="newCardsAmount"
              id="newCardsAmount"
              value={formSettings.newCardsAmount}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="wholeCardsAmount">
            Максимальное количество карточек в день
            <input
              type="number"
              name="wholeCardsAmount"
              id="wholeCardsAmount"
              value={formSettings.wholeCardsAmount}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className={styles.FormControls}>
        <Button variant="primary" onClick={cancelSubmit}>Отменить</Button>
        <Button variant="primary" onClick={handleSubmit}>Сохранить</Button>
      </div>
    </form>
  );
};

export default Settings;
