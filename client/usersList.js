Template.usersList.helpers ({
	sending: function() {
		return Session.equals('sending', this._id);
	},
	
	users : function() {
		return Meteor.users.find({_id: { $ne : Meteor.userId()}}, {sort : {username : 1}});
	}
});