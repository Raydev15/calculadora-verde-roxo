/* ============================================
   CALCULADORA - JAVASCRIPT
   Estrutura baseada no tutorial do YouTube
   ============================================ */

// Referência ao display
const display = document.getElementById('display');

/**
 * Insere um valor (número ou operador) no display
 * @param {string} data - O valor a ser inserido
 */
function insertToDisplay(data) {
    display.value += data;
}

/**
 * Limpa todo o conteúdo do display
 */
function clean() {
    display.value = '';
}

/**
 * Remove o último caractere do display
 */
function back() {
    display.value = display.value.slice(0, -1);
}

/**
 * Calcula o resultado da expressão no display
 * Utiliza try...catch para tratar erros
 */
function result() {
    try {
        // Avalia a expressão matemática
        const resultado = eval(display.value);
        display.value = resultado;
    } catch (error) {
        // Exibe "Erro" se a expressão for inválida
        display.value = 'Erro';
    }
}
