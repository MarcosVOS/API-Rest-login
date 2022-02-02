# API Rest Login ✔️

## Eu desenvolvido esse projeto em um curso ele é uma API rest para registro e login com conexão com o banco de dados MongoDB
### Para desenvolver esse projeto utilizei as seguintes tecnologias 
* JavaScript
* NodeJs 
* MongoDB 

# Rotas da API:


## [POST] localhost:{PORT}/user/register 
### Adiciona um novo usuário 
~~~~ 
{
  "name":"XXX", //MINIMO 3 CARACTERES
  "email":"XXX", //MINIMO 3 CARACTERES
  "password":"XXXXXX" //MINIMO 6 CARACTERES
}
~~~~


## [POST] localhost:{PORT}/user/login 
### Entra com um usuario já existente  
~~~~ 
{ 
  "email":"XXX",
  "password":"XXXXXX"
}
~~~~

## [GET] localhost:{PORT}/admin 
### Entra apenas com contas admin  
~~~~ 
{ 
  "email":"XXX",
  "password":"XXXXXX"
}
~~~~
