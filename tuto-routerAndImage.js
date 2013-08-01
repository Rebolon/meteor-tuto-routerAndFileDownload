if (Meteor.isServer) {
console.log('start');
  Meteor.Router.add('/:id', 'GET',  function funcDisplayAnnoncesImage(id) {	
	var fstream = Npm.require('fs'),
	filename = 'public/image.png',
	response = this.response,
	filestream;
    
	if (!fstream.existsSync(filename)) {
		console.log('router image not found', filename);
		return [404];
	}

	return [200, {'Content-Type':'image/png'}, fstream.readFileSync(filename)];
  });
}
