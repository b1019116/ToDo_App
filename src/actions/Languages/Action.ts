import LanguageActionType from "./ActionType";
import { Lang } from "../../styles/Languages";
import LanguageState from '../../states/Languages';

export type SwitchLanguage = {
    type: LanguageActionType.SWITCH_LANG,
    language: LanguageState;
}

type LanguageAction = SwitchLanguage;

export default LanguageAction;