SELECT COUNT(*) FROM farmacia;

select min(idade) from usuarios;

select max(idade) from usuarios;

select avg(idade) from usuarios where idade >= 18

select sum(estoque) from farmacia where categoria = 'blue' or categoria = 'black'
