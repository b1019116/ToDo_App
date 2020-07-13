import LanguageActionType from "./ActionType";
import { Lang } from "../../styles/Languages";

export type SwitchLanguage = {
    type: LanguageActionType.SWITCH_LANG,
    language: number
}

type LanguageAction = SwitchLanguage;

export default LanguageAction;