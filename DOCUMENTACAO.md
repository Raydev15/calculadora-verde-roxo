# Documentação - Calculadora Verde-Roxo

## 📋 Informações do Projeto

**Nome do Projeto:** Calculadora Verde-Roxo  
**Aluno:** [Seu Nome]  
**Disciplina:** Desenvolvimento Web  
**Data:** Maio de 2026  
**Tema:** Calculadora com Interface Moderna  

---

## 🎯 Objetivo

Criar uma calculadora funcional com interface moderna, utilizando HTML, CSS e JavaScript. O projeto segue a estrutura de um tutorial online, adaptado com tema verde-roxo e totalmente responsivo.

---

## 📁 Estrutura do Projeto

```
calculadora-verde-roxo/
├── index.html          # Estrutura HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
└── DOCUMENTACAO.md     # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| HTML5 | 5 | Estrutura semântica do projeto |
| CSS3 | 3 | Estilização e layout responsivo |
| JavaScript | ES6+ | Lógica e funcionalidades da calculadora |

---

## 📐 Estrutura HTML

### Elementos Principais

1. **Título (h1):** Exibe "Calculadora" no topo da página
2. **Container Principal (.calculator):** Envolve toda a interface
3. **Display (#display):** Campo de entrada desabilitado que mostra os números e operações
4. **Grade de Botões (.box-buttons):** Organiza os botões em 4 colunas

### Botões Implementados

- **Números:** 0-9
- **Operadores:** + - * /
- **Funções Especiais:**
  - **C:** Limpa o display
  - **←:** Remove o último caractere
  - **=:** Calcula o resultado
  - **.:** Adiciona ponto decimal

---

## 🎨 Design e Cores

### Paleta de Cores

| Elemento | Cor | Código |
|----------|-----|--------|
| Fundo (Gradiente) | Verde → Roxo | rgba(34, 139, 34) → rgba(75, 0, 130) |
| Calculadora | Branco | white |
| Display | Cinza Claro | #f0f0f0 |
| Botões | Cinza | #e8e8e8 |
| Botão Resultado | Verde | #228B22 |
| Texto | Cinza Escuro | #333 |
| Título | Branco | white |

### Efeitos Visuais

- **Gradiente:** 135 graus de verde para roxo
- **Transições:** 0.4s em todos os botões
- **Hover:** Mudança de cor com sombra verde
- **Ativo:** Escala reduzida (0.95) ao clicar
- **Sombra:** Box-shadow em toda a calculadora

---

## ⚙️ Funcionalidades JavaScript

### Função `insertToDisplay(data)`
```javascript
function insertToDisplay(data) {
    display.value += data;
}
```
- Adiciona números e operadores ao display
- Concatena valores usando o operador `+=`

### Função `clean()`
```javascript
function clean() {
    display.value = '';
}
```
- Limpa completamente o display
- Reseta a calculadora para o estado inicial

### Função `back()`
```javascript
function back() {
    display.value = display.value.slice(0, -1);
}
```
- Remove o último caractere inserido
- Utiliza o método `.slice(0, -1)`

### Função `result()`
```javascript
function result() {
    try {
        const resultado = eval(display.value);
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}
```
- Calcula a expressão matemática
- Utiliza `eval()` para interpretar a string
- Implementa `try...catch` para tratamento de erros
- Exibe "Erro" em caso de operação inválida

---

## 📱 Responsividade

A calculadora é totalmente responsiva com breakpoints em:

| Breakpoint | Dispositivo | Largura Máxima |
|-----------|-----------|----------------|
| Desktop | Computador | 300px |
| Tablet | iPad/Tablet | 280px |
| Mobile Grande | Smartphone | 260px |
| Mobile Pequeno | Smartphone | 240px |
| Mobile Extra Pequeno | Smartphone | 220px |

### Ajustes por Tamanho

- **Fonte do Título:** 2.5rem → 1.3rem
- **Altura dos Botões:** 60px → 35px
- **Espaçamento (gap):** 10px → 4px
- **Padding da Calculadora:** 20px → 8px

---

## 🚀 Como Usar

1. **Abrir o arquivo:** Clique em `index.html` para abrir no navegador
2. **Inserir números:** Clique nos botões numéricos
3. **Operações:** Clique nos operadores (+, -, *, /)
4. **Calcular:** Clique no botão "=" para ver o resultado
5. **Limpar:** Clique em "C" para resetar
6. **Apagar:** Clique em "←" para remover o último dígito

---

## 💡 Conceitos Aprendidos

### HTML
- Estrutura semântica com `<input>` e `<button>`
- Atributos `onclick` para eventos
- Uso de `disabled` para campos não editáveis

### CSS
- **Flexbox:** Centralização da página
- **CSS Grid:** Organização dos botões em 4 colunas
- **Transições:** Efeitos suaves em hover
- **Media Queries:** Responsividade em múltiplos dispositivos
- **Box Shadow:** Efeitos de profundidade
- **Gradientes:** Cores e efeitos visuais

### JavaScript
- **Manipulação do DOM:** Acesso e modificação de elementos
- **Eventos:** `onclick` para interação do usuário
- **Strings:** Concatenação e manipulação com `.slice()`
- **Try...Catch:** Tratamento de erros
- **Eval():** Interpretação de expressões matemáticas

---

## 🐛 Tratamento de Erros

A calculadora trata os seguintes cenários:

- **Expressão Inválida:** Exibe "Erro" (ex: "++", "5++3")
- **Divisão por Zero:** Retorna `Infinity` (comportamento padrão do JavaScript)
- **Caracteres Inválidos:** Não são inseridos (botões disponíveis são limitados)

---

## 📝 Notas Importantes

1. **Segurança:** O uso de `eval()` é adequado para este projeto educacional, mas não é recomendado em aplicações de produção
2. **Compatibilidade:** Funciona em todos os navegadores modernos (Chrome, Firefox, Safari, Edge)
3. **Acessibilidade:** Pode ser melhorada com atributos ARIA e navegação por teclado

---

## 🎓 Conclusão

Este projeto demonstra conceitos fundamentais de desenvolvimento web:
- Estrutura HTML semântica
- Estilização CSS moderna e responsiva
- Lógica JavaScript funcional
- Design de interface intuitivo

A calculadora é um exemplo prático de como combinar essas tecnologias para criar uma aplicação interativa e visualmente atraente.

---

**Data de Conclusão:** Maio de 2026  
**Status:** ✅ Completo e Funcional
