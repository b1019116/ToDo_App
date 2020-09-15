import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../states';
import String_ja from '../../styles/string_ja';
import String_en from '../../styles/string_en';
import String_ko from '../../styles/string_ko';
import LanguageState from '../../states/Languages';
import {switchLanguage} from '../../actions/Languages/ActionCreator'

type Function = {
    function: () => void;
}

type Props = {
    labels: string[];
    defaultLabel: string;
    onChanges: any;
}

const languages: LanguageState[] = [{id: new String_ja().lang_id, name: new String_ja().lang_name},
                                    {id: new String_en().lang_id, name: new String_en().lang_name}, 
                                    {id: new String_ko().lang_id, name: new String_ko().lang_name}];

const createOptions = (labels: string[], onChanges: Function[]) => {
    let list = document.getElementById('list');
    for(let i = 0; i < labels.length; i++){
        let option = document.createElement('option');
        option.setAttribute('value', labels[i]);
        option.innerHTML = labels[i];
        if(list){
            list.appendChild(option);
        }
    }
}



const Dropdown: React.FC = () => {
    // const { labels, defaultLabel, onChanges}  = props;
    const language = useSelector<RootState, RootState['language']>(state => state.language);
    const labels = ['日本語', 'English', '한국어'];
    // createOptions(labels, onChanges);

    const dispatch = useDispatch();

    const dealSwitchLanguage = (language: LanguageState | undefined) => {
        if(language != undefined){
            const dispatchedLanguage: LanguageState = language;
            console.log('language switching: ' + language.id + ' ' + language.name);
            dispatch(switchLanguage(dispatchedLanguage));
        }else {
            console.log('language switching failed');

            dispatch(switchLanguage(languages[0]));

        }
    }


    return (
        <StyledDropdown value={language.name} name="list" id="list" onChange={(e) => {dealSwitchLanguage(languages.find(item => item.name === e.target.value))}}>
            <option value={new String_ja().lang_name}>{new String_ja().lang_name}</option>
            <option value={new String_en().lang_name}>{new String_en().lang_name}</option>
            <option value={new String_ko().lang_name}>{new String_ko().lang_name}</option>
        </StyledDropdown>
    );
}

export default Dropdown;

const StyledDropdown = styled.select(props => `
    width: 100px;
    height: 30px;
    border: absolute;
    border-radius: 5px;
`);