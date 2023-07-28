import React, { useState } from 'react';
import './index.scss';
import './indexLight.scss';
import editIcon from '../../assets/edit.png';
import editIconL from '../../assets/editL.png';
import deleteIcon from '../../assets/delete.png';
import deleteIconL from '../../assets/deleteL.png';
import checkboxIcon from '../../assets/checkbox.png';
import checkboxIconL from '../../assets/checkboxL.png';
import checkedIcon from '../../assets/checked.png';
import checkedIconL from '../../assets/checkedL.png';
import plusIcon from '../../assets/plus.png';
import plusIconL from '../../assets/plusL.png'
import TaskHeaders from '../../components/TaskHeaders/TaskHeaders';
import CustomModal from '../../components/Modal/Modal';
import Principal from '../../components/Principal/Principal';
import Header from '../../components/Header/Header';
import sunIcon from '../../assets/sun.png';
import moonIcon from '../../assets/moon.png';
import { useTheme } from '../../../ThemeContext';



const ToDo = () => {


  const { toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme(); 
  };

  const [tasks, setTasks] = useState([
    { taskName: 'Limpar a casa', taskStatus: false },
    { taskName: 'Responder e-mails', taskStatus: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletingTask, setDeletingTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTaskName, setSelectedTaskName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [
        ...tasks,
        { taskName: newTask, taskStatus: false },
      ];
      setTasks(updatedTasks);
      setNewTask('');
      setShowAddModal(false); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const handleTaskStatusChange = (index) => {
    const updatedTasks = [...tasks];
    if (updatedTasks[index]) {
      updatedTasks[index].taskStatus = !updatedTasks[index].taskStatus;
      setTasks(updatedTasks);
    }
  };

  const handleEditTask = (index) => {
    setEditingTask(index);
    setSelectedTaskName(tasks[index]?.taskName);
    setConfirmEdit(true);
  };

  const handleConfirmEdit = () => {
    setConfirmEdit(false);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setConfirmEdit(false);
    setEditingTask(null);
    setEditedTaskName('');
    setSelectedTaskName('');
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    if (editingTask !== null && updatedTasks[editingTask]) {
      updatedTasks[editingTask].taskName = editedTaskName;
      setEditedTaskName('');
      setTasks(updatedTasks);
    }
    setEditingTask(null);
    setShowEditModal(false);
  };

  const handleDeleteTask = (index) => {
    setDeletingTask(index);
    setSelectedTaskName(tasks[index]?.taskName);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((_, index) => index !== deletingTask);
    setTasks(updatedTasks);
    setConfirmDelete(false);
    setDeletingTask(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setDeletingTask(null);
    setSelectedTaskName('');
  };

  const handleAddTaskModal = () => {
    setShowAddModal(true);
  };

  const handleCancelAddTask = () => {
    setShowAddModal(false);
  };

  const { isLightMode } = useTheme();


  const newTaskInput = isLightMode ? 'new-task-inputL task-input' : 'new-task-input task-input';
  const taskName = isLightMode ? 'task-nameL' : 'task-name';
  const checkboxSrc = isLightMode ? checkboxIconL : checkboxIcon;
  const checkedSrc = isLightMode ? checkedIconL : checkedIcon;
  const editIconSrc = isLightMode ? editIconL : editIcon;
  const deleteIconSrc = isLightMode ? deleteIconL : deleteIcon;
  const plusIconSrc = isLightMode ? plusIconL : plusIcon;
  const text = isLightMode ? 'textL' : 'text';
  const paragraph = isLightMode ? 'paragraphL' : 'paragraph';
  const modButton = isLightMode ? 'firstButtonL' : 'firstButton';



  return (
    <>
      <Header />
      <Principal />
      <TaskHeaders />
      <div className="container">
      <div className="theme-toggle-container">
        <button className={`theme-toggle-button ${isLightMode ? 'moon' : 'sun'}`} onClick={handleThemeToggle}>
          <img src={isLightMode ? moonIcon : sunIcon} alt="Alternar Tema" />
        </button>
      </div>      
      <ul className="list-items">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-content">
                <span className={taskName}>{task.taskName}</span>
                <img
                  src={task.taskStatus ? checkboxSrc : checkedSrc}
                  alt="Checkbox"
                  onClick={() => handleTaskStatusChange(index)}
                  className="checkbox-icon"
                />
              </div>
              <div className="task-buttons">
                <img
                  src={editIconSrc}
                  alt="Editar"
                  className="icon edit-icon"
                  onClick={() => handleEditTask(index)}
                />
                <img
                  src={deleteIconSrc}
                  alt="Excluir"
                  className="icon delete-icon"
                  onClick={() => handleDeleteTask(index)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="add-task-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress} 
            placeholder="Nova Tarefa..."
            className={newTaskInput}
          />
          <img
            src={plusIconSrc}
            alt="Adicionar"
            className="icon add-icon"
            onClick={handleAddTaskModal}
          />
        </div>
      </div>
      <CustomModal isOpen={confirmEdit} onClose={handleCancelEdit}>
        <h2 className={text}>Deseja editar esse ítem?</h2>
        <p className={paragraph}>{selectedTaskName}</p>
        <button className={modButton} onClick={handleCancelEdit}>
          Não
        </button>
        <button className="secondButton" onClick={handleConfirmEdit}>
          Sim
        </button>
      </CustomModal>
      {showEditModal && (
        <CustomModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
        >
          <h2 className={text}>Editar Tarefa</h2>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            className="edit-task-input"
          />
          <button className={modButton} onClick={handleSaveEdit}>
            Salvar
          </button>
          <button
            className="secondButton"
            onClick={() => setShowEditModal(false)}
          >
            Cancelar
          </button>
        </CustomModal>
      )}
      <CustomModal isOpen={confirmDelete} onClose={handleCancelDelete}>
        <h2 className={text}>Deseja excluir esse ítem?</h2>
        <p className={paragraph}>{selectedTaskName}</p>
        <button className={modButton} onClick={handleCancelDelete}>
          Não
        </button>
        <button className="secondButton" onClick={handleConfirmDelete}>
          Sim
        </button>
      </CustomModal>
      {showAddModal && (
        <CustomModal isOpen={showAddModal} onClose={handleCancelAddTask}>
          <h2 className={text}>Adicionar Tarefa</h2>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="add-task-input"
          />
          <button className={modButton} onClick={addTask}>
            Adicionar
          </button>
          <button className="secondButton" onClick={handleCancelAddTask}>
            Cancelar
          </button>
        </CustomModal>
      )}
    </>
  );
};

export default ToDo;
