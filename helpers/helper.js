/**
 * @description Implementation of https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm.
 * @param board {Array}
 * @param startNode {Object}
 * @param finishNode {Object}
 * @returns {[]}
 */
export function resolveWithDijkstra(board, startNode, finishNode) {
    const visitedInOrder = [];
    startNode.distance = 0;
    const notVisited = getAllNodes(board);
    while (!!notVisited.length) {
        sortByDistance(notVisited);
        const closestNode = notVisited.shift();
        if (closestNode.isWall) continue;
        if (closestNode.distance === Infinity) return visitedInOrder;
        closestNode.isVisited = true;
        visitedInOrder.push(closestNode);
        if (closestNode === finishNode) return visitedInOrder;
        updateNeighborsUnvisited(closestNode, board);
    }
}

/**
 * @description Backtrack: only works when called *after* the {resolveWithDijkstra} method above.
 * @param finishNode
 * @returns {[]}
 */
export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}


function sortByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighborsUnvisited(node, board) {
    const unvisitedNeighbors = getNeighborsUnvisited(node, board);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

function getNeighborsUnvisited(node, board) {
    const neighbors = [];
    const {x, y} = node;
    if (x > 0) neighbors.push(board[x - 1][y]);
    if (x < board.length - 1) neighbors.push(board[x + 1][y]);
    if (y > 0) neighbors.push(board[x][y - 1]);
    if (y < board[0].length - 1) neighbors.push(board[x][y + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function getAllNodes(board) {
    const nodes = [];
    for (const row of board) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}
