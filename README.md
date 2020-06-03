Bloggy
======

Um microblog no estilo React de ser! 

### Falando um pouco sobre React.js

Como muitos já sabem, o react é uma ferramenta que permite criar UI
completas para suas aplicações. Nesse projeto foi possível utliizar
vários conceitos como os Hooks, styled-compenents, react-router-dom e
suas várias funcionalidades.

### Considerações e Melhorias

Massss,\
 Ainda é possível mehorar bastante coisa. A utilização de um gerenciador
de estado como Redux ou até mesmo a própria context API do React que
traz soluções incríveis para esse problemas.

### Controle de Autenticação nas rotas

Neste Projeto Utilizei uma estratégia bem conehcida de controle de
autenticação nas rotas. É o que chamamos de PrivateRoute. Abaixo segue a
explicação sobre este método de implementar autenticação nas rotas.

>             No arquivo routes.js
>             
>
>
>               import React from "react";
>               import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
>               
>               import { isAuthenticated } from "./services/auth";
>               
>               import SignUp from './pages/SignUp';
>               import SignIn from './pages/SignIn';
>               import BlogPage from './pages/Blog';
>               
>               const PrivateRoute = ({ component: Component, ...rest }) => (
>                 < Route
>                   {...rest}
>                   render={props =>
>                     isAuthenticated() ? (
>                         < Component {...props} />
>                       ) : 
>                       (
>                         < Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
>                     )
>                   }
>                 />
>               );
>               
>               const Routes = () => (
>                 < BrowserRouter >
>                   < Switch >
>                     < Route exact path="/signup" component={SignUp} />
>                     < Route exact path="/signin" component={SignIn} />
>                     < PrivateRoute path="/app" component={BlogPage} />
>                     < Route path="*" component={() => Page not found} />
>                   
>                 
>               );
>               
>               export default Routes;    
>             
>             
>               No trecho de código acima, a estratégia consiste em criar um Component PrivateRoute que
>               retorna uma Route(do react-router-dom). Através de uma operação ternária ele confirma se
>               o usuário está autenticado e caso não esteja ele será direcionado ao login. Essa é a forma
>               mais simples de controle de rotas que o usuário pode acessar com react.
>             
>           
>
>             No arquivo auth.js
>             
>               export const TOKEN_KEY = "@microblog-Token";
>               export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
>               export const getToken = () => localStorage.getItem(TOKEN_KEY);
>               export const login = token => {
>                 localStorage.setItem(TOKEN_KEY, token);
>               };
>               export const logout = () => {
>                 localStorage.removeItem(TOKEN_KEY);
>               };
>             
>           
>
>             No arquivo api.js
>             
>               import axios from "axios";
>               import { getToken } from "./auth";
>               
>               const api = axios.create({
>                 baseURL: "http://localhost:3333"
>               });
>               
>               api.interceptors.request.use(async config => {
>                 const token = getToken();
>                 if (token) {
>                   config.headers.Authorization = `Bearer ${token}`;
>                 }
>                 return config;
>               });
>               
>               export default api;
>             
>           
