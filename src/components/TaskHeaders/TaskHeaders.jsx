import "./index.scss";
import "./indexLight.scss"
import { useTheme } from '../../../ThemeContext';


const TaskHeaders = () => {

    const { isLightMode } = useTheme();


    const listClassName = isLightMode ? 'ListL' : 'List';
    const listHeaderClassName = isLightMode ? 'List-headerL' : 'List-header';
    const pTarefaClassName = isLightMode ? 'pTarefaL' : 'pTarefa';
    const pStatusClassName = isLightMode ? 'pStatusL' : 'pStatus';
    const pOptionsClassName = isLightMode ? 'pOpçõesL' : 'pOpções';
    const lineClassName = isLightMode ? 'lineL' : 'line';
return (
    <ul className={listClassName}>
        <li className={listHeaderClassName}>
        <p className={pTarefaClassName}>Tarefa</p>
        </li>
        <li className={listHeaderClassName}>
        <p className={pStatusClassName}>Status</p>
        </li>
        <li className={listHeaderClassName}>
        <p className={pOptionsClassName}>Opções</p>
        <div className={lineClassName}></div>

        </li>
    </ul>
    );
};

export default TaskHeaders;
