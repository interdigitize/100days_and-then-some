var elonMusk = {
	'name': 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
	'category': 'Science & Technology',
	'price': '$26.45',
	'picture': 'img/elon-musk.jpg',
	'points': 'It is Elon Musk! Do I need to say more?',
}

var fifthAgreement = {
	'name': 'The Fifth Agreement: A Practical Guide to Self-Mastery',
	'category': 'Spirtual',
	'price': '$12.00',
	'picture': 'img/the-fifth-agreement.jpg',
	'points': 'A guide to self-mastery featuring the Toltec Wisdom!',
}

var alchemist = {
	'name': 'The Alchemist',
	'category': 'Life',
	'price': '$6.25',
	'picture': 'img/the-alchemist.jpg',
	'points': 'A book about finding the beauty of life.'
}

$('#elonMusk h3').append(elonMusk.name);
$('#fifthAgreement h3').append(fifthAgreement.name);
$('#alchemist h3').append(alchemist.name);

$('#elonMusk .category').append(elonMusk.category);
$('#fifthAgreement .category').append(fifthAgreement.category);
$('#alchemist .category').append(alchemist.category);

$('#elonMusk .price').append(elonMusk.price);
$('#fifthAgreement .price').append(fifthAgreement.price);
$('#alchemist .price').append(alchemist.price);

$('#elonMusk .img').append('<img src="' + elonMusk.picture + '" class="img-responsive">');
$('#fifthAgreement .img').append('<img src="' + fifthAgreement.picture + '" class="img-responsive">');
$('#alchemist .img').append('<img src="' + alchemist.picture + '" class="img-responsive">');

$('#elonMusk .points').append(elonMusk.points);
$('#fifthAgreement .points').append(fifthAgreement.points);
$('#alchemist .points').append(alchemist.points);
