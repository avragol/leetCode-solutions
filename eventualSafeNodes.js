/** 
   * @param { number[][] } graph
   * @return { number[]}
*/
/* var eventualSafeNodes = function (graph) {
    let originalGraph = graph;
    let safeNodes = graph.map((node, i) => {
        if (node.length === 0) return i;
        return null;
    }).filter(node => node !== null);
    let safeNodeLength = 0;
    while (safeNodeLength !== safeNodes.length) {
        safeNodeLength = safeNodes.length;
        originalGraph.forEach((node, i) => {
            if (checkArrayValues(node, safeNodes) && !safeNodes.includes(i)) {
                safeNodes = [...safeNodes, i];
            }
        })
    }
    return safeNodes.sort((a, b) => a - b);
};

function checkArrayValues(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            return false;
        }
    }
    return true;
}; */

//זה לא היה מספיק אופטימלי בשבילם, אז לקחתי את זה מצ'אט ג'יפיטי
var eventualSafeNodes = function (graph) {
    const nodeCount = graph.length;
    const visited = new Array(nodeCount).fill(false);
    const safeNodes = [];

    const isSafeNode = (node) => {
        if (visited[node]) {
            return false;
        }
        if (safeNodes[node]) {
            return true;
        }
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!isSafeNode(neighbor)) {
                return false;
            }
        }
        visited[node] = false;
        safeNodes[node] = true;
        return true;
    };
    for (let node = 0; node < nodeCount; node++) {
        isSafeNode(node);
    }

    return safeNodes.reduce((result, isSafe, node) => {
        if (isSafe) {
            result.push(node);
        }
        return result;
    }, []);
};


const graph = [[1, 2], [2, 3], [5], [0], [5], [], []]
console.log(eventualSafeNodes(graph));
