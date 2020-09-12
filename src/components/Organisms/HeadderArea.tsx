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
import DropdownList from 'react-widgets/lib/DropdownList';
import { switchLanguage } from '../../actions/Languages/ActionCreator';
import {useDispatch, useSelector} from 'react-redux';
import RootState from '../../states/index';

type Props = {
    area: string;
    string: String_root;
    onClickJa: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickEn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickKo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

const HeadderArea: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { area, string, onClickJa, onClickEn, onClickKo } = props;
    var tasks: TasksState = useSelector<TasksState, TasksState>(state => state);
    // ドロップダウンリストに記載するラベル文字列
    const labels = ['日本語', 'English', '한국어'];
    // ボタン部分をドロップダウンリストで置き換える。
    const language = useSelector<RootState, RootState['language']>(state => state.language);
    return (
        <GridArea area = {area}>
            <Label fontSize={FontSize.Large}  text={string.title} />
            <Label fontSize={FontSize.Medium}  text={string.lang_menu}/>
            <div>
                <DropdownList 
                    data = {labels}
                    value = {labels[language-1]}
                    onChange={ (value) => {
                        console.log('Deopdown value selected: ' + value);
                            switch(value){
                                case '日本語':
                                    console.log('Ja selected');
                                    dispatch(switchLanguage(1));
                                    break;
                                case 'English':
                                    console.log('En selected');
                                    dispatch(switchLanguage(2));
                                    break;
                                case '한국어':
                                    console.log('Ko selected');
                                    dispatch(switchLanguage(3));
                                    break;
                                default:
                                    console.log('invalid selected');
                                    dispatch(switchLanguage(1));
                                    break;
                            }
                        }
                    }
                />
            </div>
        </GridArea>
    );
}

export default HeadderArea;