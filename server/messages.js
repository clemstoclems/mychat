Meteor.publish("messages", function() {
	return  Messages.find({$or : [{senderId: this.userId}, {recepientId: this.userId}]}, {sort : {date : 1}});
});