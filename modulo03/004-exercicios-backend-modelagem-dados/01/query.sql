create database ecommerce;

create table vendedores (
	cpf char(11) unique,
    nome varchar(150)
);

create table clientes(
	cpf char(11) unique,
    nome varchar(150)
);

create table pedidos(
	id serial primary key,
    valor int,
    cliente_cpf char(11) references clientes(cpf),
    vendedor_cpf char(11) references vendedores(cpf)
);

create table categorias (
	id serial primary key,
    nome varchar(50)
);

create table produtos (
	id serial primary key,
    nome varchar(100),
    descricao text,
    preco int,
    quantidade_em_estoque int,
    categoria_id int references categorias(id)
);

create table itens_do_pedido(
	id serial primary key,
    pedido_id int references pedidos(id),
    quantidade int,
    produto_id int references produtos(id)
);

insert into categorias(nome)values
('Frutas'),
('Verduras'),
('Massas'),
('Bebidas'),
('Utilidades');

insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)values
('mamao', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.', 90, 34, 1),
('cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão Parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('refrigerante coca cola', 'lata	sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Água mineral sem gás', 'Smartwater é água adicionada de sais minerais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricada com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

insert into clientes(cpf, nome) values
('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

insert into vendedores(cpf, nome) values
('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

insert into pedidos(valor, cliente_cpf, vendedor_cpf) Values
((
    (select preco * 1 from produtos where id = 1) +
	(select preco * 1 from produtos where id = 10) +
	(select preco * 6 from produtos where id = 11) +
	(select preco * 1 from produtos where id = 15) +
	(select preco * 5 from produtos where id = 2)
) , '80371350042', '28007155023');

insert into itens_do_pedido(pedido_id, quantidade, produto_id) Values
(1, 1, 1),
(1, 1, 10),
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);


update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 10;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where id = 11;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 15;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where id = 2;

insert into pedidos(valor, cliente_cpf, vendedor_cpf) Values
((
  (select preco * 10 from produtos where id = 17) +
	(select preco * 3 from produtos where id = 18) +
	(select preco * 5 from produtos where id = 1) +
	(select preco * 10 from produtos where id = 5) +
	(select preco * 2 from produtos where id = 6)
) , '75670505018', '23262546003');

insert into itens_do_pedido(pedido_id, quantidade, produto_id) Values
(1, 10, 17),
(1, 3, 18),
(1, 5, 1),
(1, 10, 5),
(1, 2, 6);


update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where id = 17;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where id = 6;

insert into pedidos(valor, cliente_cpf, vendedor_cpf) Values
((
  (select preco * 1 from produtos where id = 13) +
	(select preco * 6 from produtos where id = 12) +
	(select preco * 5 from produtos where id = 17) 
) , '75670505018', '23262546003');

insert into itens_do_pedido(pedido_id, quantidade, produto_id) Values
(1, 1, 13),
(1, 6, 12),
(1, 5, 17);


update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 13;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where id = 12;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where id = 17;

insert into pedidos(valor, cliente_cpf, vendedor_cpf) Values
((
  (select preco * 1 from produtos where id = 16) +
	(select preco * 6 from produtos where id = 18) +
	(select preco * 1 from produtos where id = 7) +
	(select preco * 3 from produtos where id = 1) +
	(select preco * 20 from produtos where id = 5) +
  (select preco * 2 from produtos where id = 6)
) , '75670505018', '82539841031');

insert into itens_do_pedido(pedido_id, quantidade, produto_id) Values
(1, 1, 16),
(1, 6, 18),
(1, 1, 7),
(1, 3, 1),
(1, 20, 5),
(1, 2, 6);


update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 16;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 7;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 20 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where id = 6;

insert into pedidos(valor, cliente_cpf, vendedor_cpf) Values
((
  (select preco * 8 from produtos where id = 18) +
	(select preco * 1 from produtos where id = 8) +
	(select preco * 3 from produtos where id = 17) +
	(select preco * 8 from produtos where id = 5) +
	(select preco * 2 from produtos where id = 11) 
) , '67642869061', '82539841031');

insert into itens_do_pedido(pedido_id, quantidade, produto_id) Values
(1, 8, 18),
(1, 1, 8),
(1, 3, 17),
(1, 8, 5),
(1, 2, 11);


update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 8;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where id = 17;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where id = 11;