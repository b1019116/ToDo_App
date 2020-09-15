import LanguageActionType from "./ActionType";
import { SwitchLanguage } from "./Action";
import { Lang } from '../../styles/Languages';
import LanguageState from '../../states/Languages'

export const switchLanguage = (language: LanguageState): SwitchLanguage => {
    return {
        type: LanguageActionType.SWITCH_LANG,
        language: language
    }
}