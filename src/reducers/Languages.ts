import LanguageState from "../states/Languages";
import LanguageAction from "../actions/Languages/Action";
import LanguageActionType from "../actions/Languages/ActionType"
import {Lang} from '../styles/Languages';

const initialState: LanguageState = 1;
var savedState: number;
const saveData = (inputState: number) => {
    // ローカルにデータを保存
    console.log('saved array' + inputState.toString());
    const setjson = JSON.stringify(inputState);
    localStorage.setItem('language', setjson);
  
    // ローカルからのデータを取得
    const getjson = localStorage.getItem('language');
      const json: any = getjson;
      const language: number = JSON.parse(json);
      savedState = language;
  }
  

export default (state: LanguageState = initialState, action: LanguageAction): LanguageState => {
    switch (action.type){
        case LanguageActionType.SWITCH_LANG:
            // console.log('action.language '+ action.language);
            state = action.language;
            saveData(state);
            return savedState;
        default:
            return state
    }
}