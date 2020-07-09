import React, {
  useState, useCallback, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import useAPI from '../../../common/utils';

import { setSettings } from '../../redux';
import settingsSelector from '../../redux/selectors';

import { userIdSelector } from '../../../auth/redux/selectors';

import styles from './Settings.module.css';

const cardsHintsInfo = [
  {
    title: 'Перевод слова',
    name: 'wordTranslate',
  },
  {
    title: 'Предложение с объяснением',
    name: 'exampleSentence',
  },
  {
    title: 'Предложение с примером',
    name: 'definition',
  },
  {
    title: 'Перевод предложений',
    name: 'sentenceTranslate',
  },
  {
    title: 'Транскрипция',
    name: 'transcription',
  },
  {
    title: 'Картинка-ассоциация',
    name: 'wordImage',
  },
];

const cardsBtnsInfo = [
  {
    title: 'Удалить',
    name: 'deleteBtn',
  },
  {
    title: 'Переместить в сложные',
    name: 'difficultBtn',
  },
  {
    title: 'Показать ответ',
    name: 'showAnswerBtn',
  },
];

const intervalsInfo = [
  {
    title: 'Легко',
    name: 'easyInterval',
    bgColor: '#DB7CF5',
  },
  {
    title: 'Средне',
    name: 'mediumInterval',
    bgColor: '#AA5DDB',
  },
  {
    title: 'Сложно',
    name: 'hardInterval',
    bgColor: '#7348BF',
  },
];

const interactionsInfo = [
  {
    title: 'Автоматическое воспроизведение звука',
    name: 'autoSoundPlay',
  },
  {
    title: 'Подсказки интерфейса',
    name: 'interfaceHints',
  },
];

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector);
  const userId = useSelector(userIdSelector);
  // так как изменения происходят при нажатии кнопки сохранить
  // - использую локальный стейт для изменения настроек
  const [formSettings, setFormSettings] = useState(settings);
  const [didSubmit, setDidSubmit] = useState(false);

  const endpoint = useMemo(() => `users/${userId}/settings`, [userId]);

  const submitFetchOptions = useMemo(() => ({
    method: 'PUT',
    body: JSON.stringify(formSettings),
  }), [formSettings]);

  // Запрос, чтобы поместить настройки

  const submitAction = useCallback((data) => {
    dispatch(setSettings(data));
    setDidSubmit(false);
  }, [dispatch]);

  useAPI(endpoint, submitFetchOptions, submitAction, didSubmit);

  const handleChange = useCallback((event) => {
    const {
      name, type, checked, value,
    } = event.target;
    const newFormSettings = { ...formSettings };
    if (name === 'wordsPerDay') {
      newFormSettings[name] = type === 'checkbox' ? checked : value;
    } else {
      newFormSettings.optional[name] = type === 'checkbox' ? checked : value;
    }
    setFormSettings(newFormSettings);
  }, [formSettings, setFormSettings]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setDidSubmit(true);
  }, [setDidSubmit]);

  const cancelSubmit = useCallback(() => {
    setFormSettings(settings);
  }, [setFormSettings, settings]);

  const createCheckboxes = useCallback((cardsInfo) => (
    cardsInfo.map(({ title, name }) => (
      <label key={name} htmlFor={name} className={styles.CheckboxContainer}>
        <input
          name={name}
          id={name}
          checked={formSettings.optional[name]}
          type="checkbox"
          onChange={handleChange}
        />
        <span className={styles.Checkmark} />
        {title}
      </label>
    ))), [handleChange, formSettings]);

  return (
    <form className={styles.Settings} onSubmit={handleSubmit}>
      <div className={styles.CardsAmount}>
        <h2>Количество карточек</h2>
        <div className={styles.CardsAmountForm}>
          <label htmlFor="newCardsAmount">
            Новых слов в день
            <input
              type="number"
              name="newCardsAmount"
              id="newCardsAmount"
              value={formSettings.optional.newCardsAmount}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="wholeCardsAmount">
            Максимальное количество карточек в день
            <input
              type="number"
              name="wordsPerDay"
              id="wordsPerDay"
              value={formSettings.wordsPerDay}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className={styles.CardsDisplaySettings}>
        <div>
          <h2>Информация на карточках</h2>
          {createCheckboxes(cardsHintsInfo)}
        </div>
        <div>
          <h2>Добавить кнопки к карточкам</h2>
          {createCheckboxes(cardsBtnsInfo)}
        </div>
        <div>
          <h2>Настроить интервалы повторения</h2>
          {intervalsInfo.map(({ title, name, bgColor }) => (
            <label key={name} htmlFor={name} className={styles.Intervals}>
              <div style={{ backgroundColor: bgColor }}>
                {title}
              </div>
              <input
                name={name}
                id={name}
                value={formSettings.optional[name]}
                type="number"
                onChange={handleChange}
                min={1}
              />
            </label>
          ))}
        </div>
      </div>
      <div className={styles.CardsInteractions}>
        {interactionsInfo.map(({ title, name }) => (
          <div className={styles.Interaction}>
            <h2>{title}</h2>
            <label key={name} htmlFor={name} className={styles.Switch}>
              <input
                name={name}
                id={name}
                checked={formSettings.optional[name]}
                type="checkbox"
                onChange={handleChange}
              />
              <span className={styles.Slider} />
            </label>
          </div>
        ))}
      </div>
      <div className={styles.FormControls}>
        <Button
          variant="outline-primary"
          onClick={cancelSubmit}
          className={styles.OutlineButton}
        >
          Отменить
        </Button>
        <Button
          variant="primary"
          type="submit"
          className={styles.SubmitButton}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default Settings;
