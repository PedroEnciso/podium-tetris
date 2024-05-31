import { SET_NEXT_TETROMINO } from "../types";

export default function setNextTetrominoCreator(nextTetromino) {
  console.log("seting next tetromino", nextTetromino);

  return {
    type: SET_NEXT_TETROMINO,
    nextTetromino,
  };
}
