# AdequaPD

Sistema WEB para avaliar o grau de conformidade de uma organização à LGPD, por meio de um questionário simples que gera relatórios claros e práticos.

## Iniciando o projeto

Consulte os guias: Entendendo as Labels, Como criar e se atribuir a uma issue, Como abrir merge requests e boas práticas de commit.

## Estrutura do projeto

* **AdequaPD-core**: lógica do micro-SaaS (controllers, models, relatórios, etc.)
* **AdequaPD-web**: views, scripts front-end, Inertia.js, UI.

## Modelagem de interfaces

As interfaces são modeladas no **Figma**. [Acesse aqui](https://www.figma.com/proto/k9bozTQCvcgIjq5EddW0Iy/AdequaPD).

## Configuração do setup

### Chave SSH no GitLab

```bash
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub
```

### Usuário Git configurado

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

## Clonando o projeto

No GitLab, clique em **Clone with SSH**. No terminal:

```bash
git clone <project-clone-link>
```

## Alias do Sail

No terminal, teste:

```bash
sail
```

Se não funcionar, adicione o alias:

```bash
echo "alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'" >> ~/.bashrc && source ~/.bashrc
```

Ou no Mac:

```bash
echo "alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'" >> ~/.zshrc && source ~/.zshrc
```

## Instalando dependências

```bash
cd AdequaPD-web
cp .env.example .env
docker run --rm -u "$(id -u):$(id -g)" -v "$(pwd):/var/www/html" -w /var/www/html laravelsail/php83-composer:latest composer install --ignore-platform-reqs
```

## Executando o projeto

```bash
sail up -d
sail yarn install
sail yarn upgrade
sail composer update
sail artisan key:generate
sail artisan migrate --seed
sail yarn run dev
```

**OBS:** No WSL, para alterações no Front-End:

```bash
sail yarn run build
```
