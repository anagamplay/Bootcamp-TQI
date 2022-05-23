# Introdução ao Git e ao Git Hub
## Navegação via command line interface
### Comandos básicos no terminal (Windows ou Linux):
- Listar: dir ou ls;
- Mudar diretório: cd;
- Voltar: cd.. ou cd.;
- Limpar terminal: cls ou clear(Ctrl + L);
- Criar pasta/diretório: mkdir [nome];
- Criar arquivo: echo [texto] > [nome do arquivo];
- Deletar arquivos no Windows: del [diretório];
- Remover arquivos e/ou diretórios: rmdir [diretório] /S /Q ou rm -rf [diretório];

##Entendendo como o Git funciona:
 
- SHA1
	- SHA(Secure Hash Algorithm): "(...)conjunto de funções hash criptográficas projetadas pela NSA(Agência de Segunrança Nacional do EUA)."
		"A encriptação gera um conjunto de caracteres identicador de 40 dígitos."

- Objetos internos do Git
	- Blobs;
	- Trees;
	- Commits;

## Primeiros comandos com o Git:
- Init: git init;
- Add: git add *;
- Commit: git commit -m "texto".ta

## Ciclo de vida dos arquivos no Git:
- Tracked: git tem ciência;
- Untracked: git não tem ciência;
- Unmodified: não foi modificado;
- Modified: sofreu modificação;
- Staged: pronto para o commit;

## Introdução ao GitHub:
- Lincar diretório local com repositório remoto: git remote add origin [url do repositório no GitHub];
- Enviar arquivos locais para o repositório remoto: git push origin master;
- Atualizar repositório local: git pull origin master;

## Outros comandos no Git Bash: 
- Mostrar arquivos ocultos: ls -a;
- Mover arquivos: mv [arquivo] [repositório];
- Status dos arquivos: git status;
- Clonar repositório: git clone [url];
- URL do repositório: git remote -v;




  

