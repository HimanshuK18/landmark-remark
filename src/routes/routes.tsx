import * as React from 'react';
import { Routes, Route } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import { lazy } from "react";
import App from '../App';
import BasicMenu from '../menu/menu';
import NoPage from "../nopage/NoPage";
import DataTable from '../grid/grid';
import { GridData } from '../grid/gridDate';


const TicTacToe = lazy(() => import('../tictactoe/tictactoe'));

// start again from https://handsonreact.com/docs/lists, and hooks in w3schools
function SetRoutes() {
    return (<>
        <BrowserRouter>
            <BasicMenu />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<NoPage />} />
                <Route path="grid" element={<DataTable />} />
                <Route path="griddata" element={<GridData />} />
                <Route path="tictac" element={
                    <React.Suspense fallback={<>...Loading</>}>
                        <TicTacToe />
                    </React.Suspense>
                } />
            </Routes>
        </BrowserRouter>
    </>);
}

export default SetRoutes;

//https://handsonreact.com/docs/labs/react-tutorial-typescript