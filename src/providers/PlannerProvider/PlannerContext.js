import {createContext, useContext} from "react";

const initialState = {
    itemList: [],
    boardList: [],
    dropHandler: (e, board) => {},
    dragEndHandler: (e) => {},
    dragMenuItemStartHandler: (e, item) => {},
    dragStartHandler: (e, board, item) => {},
    dragLeaveHandler: (e) => {},
    dragOverHandler: (e) => {},
    saveArrayToFile: () => {},
    importArrayFromFile: (file) => {},
}

const PlannerContext = createContext(initialState);

const usePlanner = () => useContext(PlannerContext);

export { PlannerContext, usePlanner };