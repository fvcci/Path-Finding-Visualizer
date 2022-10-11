import React from "react";

import { NODE_STATE } from "../../constants";
import "./Node.css";

export interface NodeType {
  row: number;
  col: number;
  weight: number;
  state: string;
}

interface NodeProps {
  row: number;
  col: number;
  weight: number;
  state: string;
  onMouseDown: (row: number, col: number) => void;
  onMouseUp: () => void;
  onMouseEnter: (row: number, col: number) => void;
  onMouseLeave: (row: number, col: number) => void;
}

export const Node: React.FC<NodeProps> = ({
  row,
  col,
  weight,
  state,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <td
      id={`node-${row}-${col}`}
      className={`${NODE_STATE.DEFAULT} ${state}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseUp={onMouseUp}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseLeave={() => onMouseLeave(row, col)}
    /> //{weight}</td>
  );
};