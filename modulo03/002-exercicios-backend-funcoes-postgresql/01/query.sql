SELECT COUNT(*) FROM farmacia;

select min(idade) from usuarios;

select max(idade) from usuarios;

select avg(idade) from usuarios where idade >= 18

select sum(estoque) from farmacia where categoria = 'blue' or categoria = 'black'

select categoria, sum(estoque) from farmacia where categoria is not null group by categoria;

select sum(estoque) from farmacia where categoria is null;

select count(id) from farmacia where categoria is null;

select concat(medicamento, ' (', categoria, ')') from farmacia where categoria is not null;

select concat(id, ' - ', medicamento, ' (', coalesce(categoria, 'sem categoria'), ')') from farmacia;

select nome, idade, cast(data as date) from usuarios where data between '2020-01-01' and '2020-12-31';

select nome, idade, email, age(data::date) from usuarios where idade < 18;

select nome, idade, email, age(data::date) from usuarios where idade > 60;

select categoria, count(id)  from farmacia where categoria is not null group by categoria;

select idade, count(id) from usuarios where idade >= 18 group by idade;

select categoria, sum(estoque) from farmacia group by categoria limit 3;
