/* eslint-disable */
import './language-select.scss';
import { languages } from '@alpsbte/shared/language';
import type { Language } from '@alpsbte/shared/language';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { ChangeEvent } from 'react';

export interface LanguageSelectProps {}

export const LanguageSelect: React.FC<LanguageSelectProps> = inject(
  languageStore.storeKey
)(
  observer(({}: LanguageSelectProps) => {
    return (
      <select
        className="language-select"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          languageStore.setLanguage(e.target.value as Language)
        }
      >
        {languages.map((o: string, i: number) => {
          return (
            <option key={i} value={o}>
              {o}
            </option>
          );
        })}
      </select>
    );
  })
);

export default LanguageSelect;
