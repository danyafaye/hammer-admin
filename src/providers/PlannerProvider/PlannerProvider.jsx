import React, {useState} from 'react';
import {PlannerContext} from "./PlannerContext";

const PlannerProvider = ({children}) => {
    const [itemList] = useState([
        {
            id: 1,
            imgSrc: '/img/furniture/desk.png'
        },
        {
            id: 2,
            imgSrc: '/img/furniture/chair.png'
        },
        {
            id: 3,
            imgSrc: '/img/furniture/closet.png'
        },
        {
            id: 4,
            imgSrc: '/img/furniture/stand.png'
        },
        {
            id: 5,
            imgSrc: '/img/furniture/hanger.png'
        },
        {
            id: 6,
            imgSrc: '/img/furniture/lamp.png'
        },
        {
            id: 7,
            imgSrc: '/img/furniture/kitchen.png'
        },
        {
            id: 8,
            imgSrc: '/img/furniture/sofa.png'
        },
    ]);

    const [boardList, setBoardList] = useState(Array.from(Array(16), (it, index) => {
        return {
            id: ++index,
            item: '',
        }
    }));

    const [currentBoard, setCurrentBoard] = useState();
    const [currentItem, setCurrentItem] = useState();

    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.target.className === 'card') {
            e.target.style.borderWidth = '3px';
        }
    }

    const dragLeaveHandler = (e) => {
        e.target.style.borderWidth = '1px';
    }

    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    const dragMenuItemStartHandler = (e, item) => {
        setCurrentItem(item.imgSrc);
    }

    const dragEndHandler = (e) => {
        e.target.style.borderWidth = '1px';
    }

    const dropHandler = (e, board) => {
        e.preventDefault();
        e.stopPropagation();
        setBoardList(
            boardList.map((b) => {
                if (b.id === board?.id) {
                    board.item = currentItem;
                    return board;
                }
                if (b.id === currentBoard?.id) {
                    currentBoard.item = '';
                    return currentBoard;
                }
                return b;
            }),
        );
        e.target.style.borderWidth = '1px';
    }

    const saveArrayToFile = () => {
        const blob = new Blob([JSON.stringify(boardList)], {type: 'text/json'});
        const link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", "boardList.json");
        link.click();
    }

    const importArrayFromFile = (e) => {
        const reader = new FileReader()
        reader.readAsText(e.target.files[0])
        reader.onload = () => {
            const json = JSON.parse(reader.result);
            setBoardList(json);
        }
    }

    return (
        <PlannerContext.Provider value={{
            itemList,
            boardList,
            dropHandler,
            dragEndHandler,
            dragMenuItemStartHandler,
            dragStartHandler,
            dragLeaveHandler,
            dragOverHandler,
            saveArrayToFile,
            importArrayFromFile,
        }}>
            {children}
        </PlannerContext.Provider>
    );
};

export {PlannerProvider};