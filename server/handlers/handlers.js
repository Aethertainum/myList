var contactController = require('./../db/controllers');

module.exports = {
  addContact: function(req,res) {
    var contactData = req.body;

    contactController.createContact(contactData,function(data) {
      res.status(201).send(data);
    });
  }
};
