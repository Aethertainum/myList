var Test = require('./models');

module.exports = {
  createContact: function(contactData, cb) {
    var newContact = new Test(contactData);

    newContact.save(function(err,data) {
      if(err) {
        console.log('you fucked up!',err);
      } else {
        cb(data);
      }
    });
  }
};
