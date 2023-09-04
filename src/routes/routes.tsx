import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import App from '../App';
import BasicMenu from '../menu/menu';
import NoPage from "../nopage/NoPage";
import DataTable from '../grid/grid';
import { GridData } from '../grid/gridDate';
import UserComponent from "../components/userComponent";
import Chat from "../chat/chat";
import Ref from "../DOM/ref"; 
import LoginPage from '../login/login';
import ProtectedRoute from '../components/secureRoute';


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
                <Route path="user/:id" Component={UserComponent} />
                <Route path="chat" Component={Chat} />
                <Route path="ref" Component={Ref} />
                <Route path="login" element={<LoginPage />} />
                <Route path="griddata" element={<GridData />} />
                {/* Secured routes */}

                <Route path='tictac' element={
                    <ProtectedRoute>
                        <React.Suspense fallback={<div>...Loading</div>}>
                            <TicTacToe />
                        </React.Suspense>
                    </ProtectedRoute>
                } />

            </Routes>
        </BrowserRouter>
    </>);
}

export default SetRoutes;

//https://handsonreact.com/docs/labs/react-tutorial-typescript