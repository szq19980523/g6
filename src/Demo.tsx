import G6 from '@antv/g6';
import React, { useEffect, useState } from 'react';
const Demo = () => {
  // const ref = React.useRef(null);
  const [count, setCount] = useState(0)
  let graph = null;
  const data = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 50, // Number，可选，节点位置的 x 值
        y: 200, // Number，可选，节点位置的 y 值
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 300, // Number，可选，节点位置的 x 值
        y: 200, // Number，可选，节点位置的 y 值
      },
    ],
    // 边集
    edges: [
      {
        source: 'node1', // String，必须，起始点 id
        target: 'node2', // String，必须，目标点 id
      },
    ],
  };
  useEffect(() => {
    // if (graph) {
    //   return
    // }
    graph = new G6.Graph({
      container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 800, // Number，必须，图的宽度
      height: 500, // Number，必须，图的高度
      defaultNode: {
        shape: "circle",
        // size: [100],
        color: "#5B8FF9",
        style: {
          fill: "#9EC9FF",
          lineWidth: 3
        },
        labelCfg: {
          style: {
            fill: "#fff",
            fontSize: 20
          }
        }
      },
    });
    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  }, [])


  return (
    <>
      <div id='mountNode' />
      <div onClick={() => setCount(count + 1)}>dianji</div>
      <div>这是tsx: {count}</div>
    </>
  )
}
export default Demo