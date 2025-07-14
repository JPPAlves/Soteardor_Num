# AdequaPD

Sistema WEB para avaliação do grau de conformidade de uma organização à Lei Geral de Proteção de Dados (LGPD), por meio de um questionário simples que gera relatórios de forma clara e prática.

---

## Iniciando o projeto

Antes de começar a programar, dê uma olhada nos guias abaixo para manter um ambiente de desenvolvimento mais padronizado e coerente:

* **Entendendo as Labels**
* **Como criar uma issue**
* **Como me atribuir a uma issue**
* **Como criar uma merge request**
* **Como submeter para revisão uma merge request**
* **Boas práticas nos commits**

---

## Estrutura do projeto

O projeto divide-se em 2 diretórios principais:

* **AdequaPD-core** – Local onde está toda a lógica do micro-SaaS: controllers, models, migrations, seeders, autenticação, geração de relatórios de aderência à LGPD e integrações com bancos de dados.
* **AdequaPD-web** – Parte web do projeto, onde estão as views, páginas, assets, componentes, scripts front-end, integração com Inertia.js e toda a camada de interface.

---

## Modelagem das interfaces

A modelagem das interfaces é feita através do **Figma**, ferramenta de design colaborativa baseada na nuvem.
Para acessar o design deste projeto, **[clique aqui](#)**.

---

## Configuração do setup

Antes de iniciar a configuração do projeto, verifique se você possui os seguintes passos realizados:

---

### ✅ Chave SSH gerada e salva dentro do seu perfil no GitLab

```bash
ssh-keygen -t rsa
```

Após executar o comando acima, execute também o seguinte comando para ter acesso à chave:

```bash
cat ~/.ssh/id_rsa.pub
```

Para mais informações de como realizar essa etapa, acesse o guia de configuração de setup.

---

### ✅ Usuário Git configurado

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

---

## Configuração inicial do projeto

Para clonar o projeto em sua máquina, clique em **"Clone"** na tela inicial do projeto no GitLab e selecione a opção **"Clone with SSH"**.

Agora, dentro do PhpStorm, clique em **"GET FROM VCS"** e cole o link copiado do GitLab.

Caso queira, você também pode usar a linha de comando. Para isso, basta acessar o diretório onde você armazena seus projetos e inserir o seguinte comando:

```bash
git clone <project-clone-link>
```

---

### ✅ Verificando alias do Sail

Caso seja o primeiro projeto que você esteja trabalhando com o **Laravel Sail**, verifique se o alias do **sail** já está configurado em sua máquina.
Acesse o diretório `AdequaPD-web` do projeto e digite na linha de comando:

```bash
sail
```

O resultado deve ser semelhante ao mostrado abaixo:

```
Laravel Sail

Usage:
  sail COMMAND [options] [arguments]

Unknown commands are passed to the docker-compose binary.

docker-compose Commands:
  sail up        Start the application
  sail up -d     Start the application in the background
  ...
```

Caso o resultado seja algo como `command not found`, configure o alias do sail conforme seu sistema operacional:

---

### ✅ Configuração do alias para o Sail no Linux ou WSL

Abra o terminal, vá para o diretório raiz e edite o arquivo `.bashrc`:

```bash
cd
nano .bashrc
```

Adicione a linha de alias ao final do arquivo:

```bash
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
```

Salve e feche o arquivo. Execute `source ~/.bashrc` para aplicar a alteração.

---

### ✅ Configuração do alias para o Sail no MacOS

Abra o terminal, vá para o diretório raiz e edite o arquivo `.zshrc`:

```bash
cd
nano .zshrc
```

Adicione a linha de alias ao final do arquivo:

```bash
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
```

Salve e feche o arquivo. Execute `source ~/.zshrc` para aplicar a alteração.

---

## Baixando as dependências

Acesse a pasta `AdequaPD-web` do projeto:

```bash
cd /Users/your-user/PhpstormProjects/adequapd/AdequaPD-web/
```

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Instale as dependências do Composer com Docker:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

---

## Executando o projeto

No terminal, certifique-se de que você está na pasta `AdequaPD-web`.
Agora, suba os containers do projeto:

```bash
sail up -d
```

Exemplo de resultado:

```
[+] Running 6/6
 ✔ Container adequapd-web-mysql-1         Started   13.1s
 ✔ Container adequapd-web-redis-1         Started   12.9s
 ✔ Container adequapd-web-laravel.test-1  Started   22.3s
```

---

Após os containers estarem rodando, instale e atualize as dependências do projeto:

```bash
sail yarn install
sail yarn upgrade
sail composer install
sail composer update
```

Gere a chave do projeto:

```bash
sail artisan key:generate
```

Execute as migrações e popule o banco de dados com os seeders:

```bash
sail artisan migrate --seed
```

Finalmente, rode o comando para subir o modo dev:

```bash
sail yarn run dev
```

---

> **OBS:** Caso você esteja programando em um ambiente WSL, sempre que fizer alterações nos arquivos do Front-End do projeto, será preciso gerar uma build. Para isso, execute o seguinte comando:

```bash
sail yarn run build
```

Este comando só precisa ser utilizado em caso de edição do Front-End. Alterações no Back-End (Controllers, Migrations, Models, etc.) não exigem essa build.

---

Pronto! 🎉
Agora você pode contribuir para o desenvolvimento do **AdequaPD**!
