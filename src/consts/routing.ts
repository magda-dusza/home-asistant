import { lazy } from 'react';

const Login = lazy(() => import('../components/Login/Login'));
const Test = lazy(() => import('../components/Test/connect'));

export const ROUTES = {
    LOGIN: { path: '/login', label: 'Login', Component: Login },
    HOME: { path: '/', label: 'Home', Component: Test },
    TEST: { path: '/test', label: 'Test', Component: Test },
}