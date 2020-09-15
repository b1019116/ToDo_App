import LanguageState from "../states/Languages";
import LanguageAction from "../actions/Languages/Action";
import LanguageActionType from "../actions/Languages/ActionType"
import {Lang} from '../styles/Languages';
import String_ja from '../styles/string_ja';

const initialState: LanguageState = {id: new String_ja().lang_id, name: new String_ja().lang_name};
var savedState: LanguageState;
const saveData = (inputState: LanguageState) => {
    // ローカルにデータを保存
    console.log('saved array' + inputState.toString());
    const setjson = JSON.stringify(inputState);
    localStorage.setItem('language', setjson);
  
    // ローカルからのデータを取得
    const getjson = localStorage.getItem('language');
      const json: string | null = getjson;
      let language: LanguageState
      if(json){
        language = JSON.parse(json);
      }else{
        console.log('error: failed to get language from localstorage');
        language = {id: new String_ja().lang_id, name: new String_ja().lang_name};
      }
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