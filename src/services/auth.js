export const TOKEN_KEY = "@microblog-Token";
/**
 * O Local Storage é um espaço reservado pelos browsers para o salvamento de informações 
 * localmente.
 * Essa é uma alternativa interessante pra quando você precisa salvar informações, 
 * mas não precisa que isso fique salvo em uma API. 
 * Diferente do sessionStorage, seus dados não expiram. Mas podem ser removidos pelo usuário.
 */


/**
 * A função `isAuthenticated` é uma estratégia 
 * para verificar se o token que está sendo recebido é diferente null
 */
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

/**
 * getItem, Responsável por recuperar um dado que foi salvo no localStorage, 
 * nessa função você precisa passar a chave do item que você está querendo recuperar. 
 * Caso não exista um valor salvo, será retornado null.
 */
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};