
# Instagram Web Clone

Este projeto é uma simulação de uma interface de postagens do Instagram, com funcionalidades de interação, como "curtir" postagens, exibir curtidas e descrições. Ele foi desenvolvido utilizando HTML, CSS, TypeScript, Vite, UUID e a biblioteca `faker` para gerar dados aleatórios.

## 👀 Demo
Veja a versão em ação clicando [aqui](https://instagram-web-psi.vercel.app/).

## 🚀 Funcionalidades
- Interface de postagem similar ao Instagram.
- Possibilidade de curtir/descurtir postagens.
- Geração de postagens e avatares aleatórios.
- Exibição de descrição e contagem de likes.
- Atribuição de IDs únicos às postagens utilizando **UUID**.

## 🛠️ Tecnologias Utilizadas
- **HTML5**
- **CSS3** (Flexbox e Grid)
- **JavaScript (ES6+)**
- **TypeScript**
- **Vite**
- **UUID** (para gerar identificadores únicos)
- **Faker.js** (para geração de dados aleatórios)
- **FontAwesome** (ícones)

## 📚 Estrutura do Projeto

### HTML
A página HTML apresenta uma estrutura básica com uma postagem que inclui:
- Avatar do usuário
- Imagem da postagem
- Ícones de interação (curtir, comentar, compartilhar, salvar)
- Descrição e contagem de curtidas

### CSS
O estilo é aplicado com `CSS Grid` e `Flexbox`, garantindo a disposição dos elementos e o estilo visual. A responsividade foi configurada com `Media Queries` para se adaptar a diferentes dispositivos.

### TypeScript
A lógica da aplicação é implementada em TypeScript, utilizando classes e métodos para organizar o código. Cada postagem é gerada de forma dinâmica a partir de dados fictícios, com IDs únicos atribuídos a cada uma utilizando o **UUID**.

### Bibliotecas
- **Faker.js**: Usado para gerar nomes de usuários, avatares, imagens e descrições aleatórios.
- **UUID**: Utilizado para gerar identificadores únicos.
- **FontAwesome**: Usado para os ícones de interação.

## ℹ️ Como Executar Localmente

Para rodar o projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos
- **Node.js** instalado em sua máquina.
- **Git** para clonar o repositório.

### Passos

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/instagram-web-clone.git
   ```

2. **Acessar o Diretório do Projeto**
   ```bash
   cd instagram-web-clone
   ```

3. **Instalar as Dependências**
   ```bash
   npm install
   ```

4. **Executar o Projeto com Vite**
   ```bash
   npm run dev
   ```

5. **Abrir o Projeto**
   Abra o navegador no link fornecido pelo Vite, geralmente `http://localhost:3000`.

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENÇA](./LICENSE) para mais informações.

