import React from 'react';
import TasksState from '../../states/Tasks';
import Label from '../Atoms/Label';
import ListLabel from '../Atoms/ListLabel';
import GridArea from '../../styles/GridArea';
import String_root from '../../styles/string_root'
import Button from '../Atoms/Button'
import { FontSize } from '../../styles/Font';
import Color from '../../styles/Color';
import 'react-widgets/dist/css/react-widgets.css';
import { switchLanguage } from '../../actions/Languages/ActionCreator';
import {useDispatch, useSelector} from 'react-redux';
import RootState from '../../states/index';
import Dropdown from '../Atoms/languageDropdown';
import String_ja from '../../styles/string_ja';
import String_en from '../../styles/string_en';
import String_ko from '../../styles/string_ko';

type Props = {
    area: string;
    string: String_root;
    onClickJa: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickEn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickKo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

const HeadderArea: React.FC<Props> = (props) => {
    const { area, string, onClickJa, onClickEn, onClickKo } = props;
    var tasks: TasksState = useSelector<TasksState, TasksState>(state => state);
    // ドロップダウンリストに記載するラベル文字列
    const labels = [new String_ja().lang_name, new String_en().lang_name, new String_ko().lang_name];
    // ボタン部分をドロップダウンリストで置き換える。
    const language = useSelector<RootState, RootState['language']>(state => state.language);
    
    return (
        <GridArea area = {area}>
            <Label fontSize={FontSize.Large}  text={string.title} />
            <Label fontSize={FontSize.Medium}  text={string.lang_menu}/>
            <div>
                <Dropdown></Dropdown>
            </div>
        </GridArea>
    );
}

export default HeadderArea;