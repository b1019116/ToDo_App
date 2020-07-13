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

const setLang = (lang: number) =>{
  switch(lang){
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
        const json: any = getjson;
        const tasks = JSON.parse(json);
        console.log('task get from storage');
        if(tasks != null){
          tasks.map((task: OneTaskState) => {dispatch(addTask(task))});
        }
                // ローカルからのデータを取得
        const getjsonLang = localStorage.getItem('language');
        const jsonLang: any = getjsonLang;
        const language: number = JSON.parse(jsonLang);
        if(language != null){
          dispatch(switchLanguage(language));
        }
    }
    const lang = useSelector<RootState, RootState['language']>(state=>state.language);
    console.log('lang ' + lang);
    const onClickJa = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('switch ja');
      dispatch(switchLanguage(1));
    }
    const onClickEn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('switch en');
      dispatch(switchLanguage(2));
    }
    const onClickKo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('switch ko');
      dispatch(switchLanguage(3));
    }

  return (
    <TaskPage string={setLang(useSelector<RootState, RootState['language']>(state=>state.language))}
              onClickJa={onClickJa} 
              onClickEn={onClickEn} 
              onClickKo={onClickKo}/>
  )
}

export default App;
