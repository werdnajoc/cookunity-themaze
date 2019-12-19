import React, {Component, Fragment as Frag} from 'react';
import KeyHandler from 'react-key-handler';
import Cell from "./Cell";
import {dijkstra, getNodesInShortestPathOrder} from "./helper";


const boardConfig = [
    [
        {
            x: 0,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 1,
            isStart: true,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 0,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 0,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 1,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 1,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 1,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 1,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 1,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 2,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 2,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 2,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 2,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 2,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 2,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 2,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 2,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 2,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 2,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 2,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 2,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 3,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 3,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 3,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 3,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 3,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 3,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 3,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 3,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 3,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 3,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 3,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 3,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 4,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 4,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 4,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 4,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 4,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 4,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 4,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 4,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 4,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 4,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 4,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 4,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 5,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 5,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 5,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 5,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 5,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 5,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 5,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 5,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 5,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 5,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 5,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 5,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 6,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 6,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 6,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 6,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 6,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 6,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 6,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 6,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 6,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 6,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 6,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 6,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 7,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 7,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 7,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 7,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 7,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 7,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 7,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 7,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 7,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 7,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 7,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 7,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 8,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 8,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 8,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 8,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 8,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 8,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 9,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 9,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 9,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 9,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 9,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 9,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 9,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 9,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 9,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 9,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 9,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 9,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
    [
        {
            x: 10,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 10,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 10,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 10,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
        {
            x: 10,
            y: 11,
            isStart: false,
            isFinish: true,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        },
    ],
    [
        {
            x: 11,
            y: 0,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 1,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 2,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 3,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 4,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 5,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 6,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 7,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 8,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 9,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 10,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
        {
            x: 11,
            y: 11,
            isStart: false,
            isFinish: false,
            distance: Infinity,
            isVisited: false,
            isWall: true,
            previousNode: null,
        },
    ],
];

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            widthSize: (this.props.widthSize) ? this.props.widthSize : 12,
            heightSize: (this.props.heightSize) ? this.props.heightSize : 12,
            boardConfig,

            playerPosition: {
                x: 0,
                y: 1
            },
            previousPlayerPos: {
                x: 0,
                y: 0
            },
            totalMoves: 0,
            player: 'X',
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyRight = this.handleKeyRight.bind(this);
        this.handleKeyLeft = this.handleKeyLeft.bind(this);
    }

    countTotalMoves() {
        this.setState({
            totalMoves: ++this.state.totalMoves
        })
    }

    handleKeyUp(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
        } = this.state;

        const newPositionX = Number(playerPosition.x) - 1;
        const currentPositionY = playerPosition.y;
        const isWallNextPosition = (newPositionX > 0 ) ? boardConfig[newPositionX][currentPositionY].isWall : boardConfig[0][currentPositionY].isWall;
        if (newPositionX >= 0 && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: newPositionX,
                    y: currentPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves,
            })
        }
    }

    handleKeyDown(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
            heightSize,
        } = this.state;

        const newPositionX = playerPosition.x + 1;
        const currentPositionY = playerPosition.y;
        const isWallNextPosition = boardConfig[newPositionX][currentPositionY].isWall;
        if (newPositionX < heightSize && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: newPositionX,
                    y: currentPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves
            })
        }
    }

    handleKeyRight(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
            widthSize,
        } = this.state;

        const newPositionY = Number(playerPosition.y) + 1;
        const currentPositionX = playerPosition.x;
        const isWallNextPosition = (newPositionY < widthSize) ? boardConfig[currentPositionX][newPositionY].isWall : true;
        if (newPositionY < widthSize  && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: currentPositionX,
                    y: newPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves
            })
        }
    }

    handleKeyLeft(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
        } = this.state;

        const newPositionY = Number(playerPosition.y) - 1;
        const currentPositionX = playerPosition.x;
        const isWallNextPosition = (newPositionY > 0) ? boardConfig[currentPositionX][newPositionY].isWall : true;
        if (newPositionY > 0 && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: currentPositionX,
                    y: newPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves
            })
        }
    }

    visualizeDijkstra() {
        const {boardConfig} = this.state;
        const startNode = boardConfig[0][1];
        const finishNode = boardConfig[10][11];
        dijkstra(boardConfig, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        this.animateShortestPath(nodesInShortestPathOrder);
    }

    animateShortestPath(nodesInShortestPathOrder) {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                let cellObject = document.getElementById(`cell-${node.x}-${node.y}`);
                cellObject.className = `${cellObject.className} node-shortest-path`;
            }, 50 * i);
        }
    }

    render() {
        return (
            <div className="terrain">
                <button onClick={() => this.visualizeDijkstra()}>
                    Resolve
                </button>
                <KeyHandler keyValue="ArrowUp" onKeyHandle={this.handleKeyUp} />

                <KeyHandler keyValue="ArrowDown" onKeyHandle={this.handleKeyDown} />

                <KeyHandler keyValue="ArrowRight" onKeyHandle={this.handleKeyRight} />

                <KeyHandler keyValue="ArrowLeft" onKeyHandle={this.handleKeyLeft} />


                <div className="gameTopBar">
                    <div className="gameTopItemLeft">CookUnity</div>
                    <div className="gameTopItemRight">Moves: {this.state.totalMoves}</div>
                </div>
                <div className="cellsContainer">
                    {boardConfig.map((rowY, indexY) => (
                        <Frag key={`x-${indexY}`}>
                            {rowY.map((rowX, indexX ) => (
                                <Cell
                                    key={`y-${indexX}`}
                                    isWall={rowX.isWall}
                                    playerPosition={(indexY === this.state.playerPosition.x && indexX === this.state.playerPosition.y)}
                                    x={rowX.x}
                                    y={rowX.y}
                                    isFinish={rowX.isFinish}
                                    isStart={rowX.isStart}
                                />
                            ))}
                        </Frag>
                    ))}
                </div>

                <style jsx>{`
      .terrain {
        width: 480px;
        height: 480px;
      }
      
      .cellsContainer {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      
      .gameTopBar {
        display: flex;
        flex: 1;
        flex: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      
      .gameTopItemLeft {
        display: flex;
        flex: 1;
        flex: row;
        height: 20px;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-weight: bold;
        font-size: 14px;
        color: #000;
      }
      
      .gameTopItemRight {
        display: flex;
        flex: 1;
        flex: row;
        height: 20px;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        font-weight: bold;
        font-size: 14px;
        color: #000;
      }
      
      
      
    `}</style>
            </div>
        );
    }
}

export default Board
