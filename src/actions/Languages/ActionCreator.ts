import LanguageActionType from "./ActionType";
import { SwitchLanguage } from "./Action";
import { Lang } from '../../styles/Languages';

export const switchLanguage = (language: number): SwitchLanguage => {
    return {
        type: LanguageActionType.SWITCH_LANG,
        language: language
    }
}