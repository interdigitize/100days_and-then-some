var okGo = {
	'name': 'OK GO',
	'category': 'Alternative',
	'price': '$9.99',
	'picture': 'img/okgo.jpg',
	'points': 'Careful, you will get hooked on their creative appeal.',
}

var joepBeving = {
	'name': 'Joep Beving',
	'category': 'Piano',
	'price': '$10.30',
	'picture': 'http://joepbeving.com/wp-content/uploads/2016/02/Artwork_cover_tunecore_final_RGB-345x345.jpg',
	'points': 'His music is an experiment in existential communication, a belief in an absolute aesthetic, to prove that a universal and metaphysical reality does exist.',
}

var justin = {
	'name': 'Justin Beiber',
	'category': 'Pop',
	'price': '13.49',
	'picture': 'img/justin-bieber.jpg',
	'points': 'Girls love him!'
}

$('#okGo h3').append(okGo.name);
$('#joepBeving h3').append(joepBeving.name);
$('#justin h3').append(justin.name);

$('#okGo .category').append(okGo.category);
$('#joepBeving .category').append(joepBeving.category);
$('#justin .category').append(justin.category);

$('#okGo .price').append(okGo.price);
$('#joepBeving .price').append(joepBeving.price);
$('#justin .price').append(justin.price);

$('#okGo .img').append('<img src="' + okGo.picture + '" class="img-responsive">');
$('#joepBeving .img').append('<img src="' + joepBeving.picture + '" class="img-responsive">');
$('#justin .img').append('<img src="' + justin.picture + '" class="img-responsive">');

$('#okGo .points').append(okGo.points);
$('#joepBeving .points').append(joepBeving.points);
$('#justin .points').append(justin.points);
