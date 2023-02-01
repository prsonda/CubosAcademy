create database biblioteca;

create table autores(
    id serial primary key,
    nome text not null,
    idade int
);

create table livros(
    id serial primary key,
    nome text not null,
    genero text,
    editora text,
    data_publicacao text,
  	id_autor int references autores(id)
);