import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Panel,
  Controls,
  Position,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";
import Sidebar from "../../components/Sidebar";
import { useCallback } from "react";
import { Box, Button } from "@mui/material";
import { CustomSelector } from "../../components/Eap/CustomSelector";
import { CustomReactFlow } from "./styles";

const initialNodes = [
  {
    id: "1",
    position: { x: 700, y: 100 },
    data: { label: "1" },
  },
  { id: "2", position: { x: 700, y: 200 }, data: { label: "2" } },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: {
      strokeWidth: 2,
      stroke: "#FF0072",
    },
  },
];

export default function EAP() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTeste: Node = {
    id: "3",
    position: { x: 700, y: 300 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: "3",
    },
  };
  function AddNodes() {
    setNodes([...nodes, nodeTeste]);
  }

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            style: {
              strokeWidth: 2,
              stroke: "#FF0072",
            },
          },
          eds
        )
      ),
    [setEdges]
  );

  console.log(nodes);
  return (
    <Sidebar>
      <Box
        sx={{
          width: "97vw",
          height: "88vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CustomReactFlow
          style={{ backgroundColor: "#e7e7e8" }}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          className="touchdevice-flow"
          fitView
        >
          <Panel position="top-left" onClick={AddNodes}>
            <CustomSelector />
          </Panel>

          <Controls />
          <MiniMap />
        </CustomReactFlow>
      </Box>
    </Sidebar>
  );
}
