import React from 'react';
import {usePlanner} from "../../../providers/PlannerProvider/PlannerContext";

import './styles/styles.scss'
import {Button} from "antd";

const PlannerView = () => {
    const {itemList, boardList, dragEndHandler, dragLeaveHandler, dragMenuItemStartHandler, dragOverHandler, dragStartHandler, dropHandler, saveArrayToFile, importArrayFromFile} = usePlanner();

    return (
        <div className='planner-container'>
            <div className='planner'>
                <div className='planner-board'>
                    {boardList.map(it => <div
                        onDragOver={(e) => dragOverHandler(e)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragStart={(e) =>
                            dragStartHandler(e, it, it.item)
                        }
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDrop={(e) => dropHandler(e, it)}
                        className='card' draggable={true}
                    >
                        {it.item && <img className='img' src={it.item} alt=""/>}
                    </div>)}
                </div>
                <div className='planner-items'>
                    {itemList.map(it => <div
                        draggable={true}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragStart={(e) => dragMenuItemStartHandler(e, it)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDrop={(e) => dropHandler(e)}
                        className='card'
                    >
                        <img className='img' src={it.imgSrc} alt=""/>
                    </div>)}
                </div>
            </div>
            <div className='action-buttons'>
                <Button
                    type="primary"
                    onClick={saveArrayToFile}
                >
                    Сохранить
                </Button>
                    <label className='file-label' htmlFor="file-array">Импортировать</label>
                    <input id='file-array' className='file-input' type="file" accept='text/json' onChange={importArrayFromFile}/>
            </div>
        </div>
    );
};

export default PlannerView;