select * from musicas;

select * from musicas;

select composicao, tempo from musicas where tempo > 60*4;

select composicao, tempo from musicas where tempo > 60*4;

select * from musicas where compositor is not null and tempo < 60*5 and compositor != 'Bach';

select composicao, tempo from musicas where compositor = 'Mozart' or compositor = 'Bach';
