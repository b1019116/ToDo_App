import React from 'react';
import { useSelector } from 'react-redux'; 
import RootState from '../states/index';
import TaskPage from './Pages/TaskPage';
import {useDispatch} from 'react-redux';
import { addTask } from '../actions/Tasks/ActionCreator';
import { switchLanguage } from '../actions/Languages/ActionCreator';
import { Lang } from '../styles/Languages';
import String_root from '../styles/string_root';
import String_ja from '../styles/string_ja'
import String_en from '../styles/string_en'
import String_ko from '../styles/string_ko'
import OneTaskState from '../states/OneTask';
import AddTask from './Molecules/AddTask'
import LanguageState from '../states/Languages';

const setLang = (lang: LanguageState) =>{
  switch(lang.id){
    case 1:
      // invoke Japanese resources
      return new String_ja;
    case 2:
      //invoke English resources
      return new String_en;
    case 3:
      //invoke Korean resources
      return new String_ko;
    default:
      return new String_ko;
  }
}


const App: React.FC = () => {
    const dispatch = useDispatch();
    window.onload = function(){
        // ローカルからのデータを取得
        const getjson = localStorage.getItem('tasks');
        if(getjson != null){
          const json: string = getjson;
          const tasks = JSON.parse(json);
          console.log('task get from storage');
          if(tasks != null){
            tasks.map((task: OneTaskState) => {dispatch(addTask(task))});
          }
                  // ローカルからのデータを取得
          const getjsonLang = localStorage.getItem('language');
          if(getjsonLang != null){
            const jsonLang: string = getjsonLang;
            const language: LanguageState = JSON.parse(jsonLang);
            if(language != null){
              dispatch(switchLanguage(language));
            }
          }
        }
    }
    const lang = useSelector<RootState, RootState['language']>(state=>state.language);
    console.log('lang ' + lang);
    const onClickJa = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('switch ja');
      dispatch(switchLanguage({id: new String_ja().lang_id, name: new String_ja().lang_name}));
    }
    const onClickEn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('switch en');
      dispatch(switchLanguage({id: new String_en().lang_id, name: new String_en().lang_name}));
    }
    const onClickKo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('switch ko');
      dispatch(switchLanguage({id: new String_ko().lang_id, name: new String_ko().lang_name}));
    }

  return (
    <TaskPage string={setLang(useSelector<RootState, RootState['language']>(state=>state.language))}
              onClickJa={onClickJa} 
              onClickEn={onClickEn} 
              onClickKo={onClickKo}/>
  )
}

export default App;
