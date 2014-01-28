Template.usersList.helpers ({
	users : function() {
		return Meteor.users.find({_id: {$ne : Meteor.userId()}}, {sort : {username : 1}});
	}
});