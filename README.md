# Portfólio pessoal | Gabriel

Projeto inicial de portfólio acadêmico, organizado para edição e publicação no GitHub Pages.

## Estrutura

- `index.html`: conteúdo e estrutura das seções.
- `css/style.css`: estilos personalizados do site.
- `js/script.js`: interações em JavaScript.
- `css/` e `js/`: arquivos locais do Bootstrap.
- `fontawesome/`: biblioteca de ícones.
- `img/`: imagens do site (gabriel, flamengo, catolico, teatro, show e bandeira-santa-se.svg).
- `projetos/projeto-1/` e `projetos/projeto-2/`: seus dois sites, abertos pelo botão "Ver projeto". O projeto 2 usa o Bootstrap e o Font Awesome do portfólio (pastas `css/`, `js/` e `fontawesome/` da raiz).
- `img/projeto1.jpg` e `img/projeto2.jpg`: prints dos projetos usados nos cards.

## Como personalizar

1. Abra a pasta no Visual Studio Code.
2. Edite os textos diretamente no `index.html`.
3. Altere cores, fontes, tamanhos e espaçamentos em `css/style.css`. As cores principais estão no bloco `:root`, no começo do arquivo.
4. Adicione interações em `js/script.js`.
5. Substitua os links `#`, o e-mail de exemplo e os textos de demonstração pelos seus dados.
6. Para adicionar um projeto, copie um bloco `<div class="col-md-6 col-lg-4">` da seção `#projetos` e edite o conteúdo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ou escolha um repositório vazio).
2. Envie **o conteúdo desta pasta**, incluindo `index.html`, para a raiz do repositório.
3. No GitHub, abra `Settings` → `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/(root)`, depois clique em `Save`.
6. Aguarde a publicação. O endereço aparecerá na própria página de configurações do Pages.

O GitHub Pages procura um `index.html` na raiz da origem de publicação. O site é estático e não precisa de servidor ou banco de dados.

## Antes de entregar

- [ ] Personalizei apresentação e seção Sobre mim.
- [ ] Revisei habilidades para não listar tecnologias que ainda não conheço.
- [ ] Troquei os cards de exemplo pelos meus projetos.
- [ ] Atualizei foto, e-mail e redes sociais.
- [ ] Testei em celular e computador.
- [ ] Confirmei que o site abre pelo endereço do GitHub Pages.


## Interesses interativos
Na seção **Minha identidade**, os botões Flamenguista, Católico, Teatro e Música alteram o fundo da seção e mostram as fotos no meio. A lógica fica em `js/script.js`, os estilos em `css/style.css` e a bandeira vetorial local em `img/bandeira-santa-se.svg`.
