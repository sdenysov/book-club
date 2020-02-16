var self = this;
if (ctx.req.query.include === 'owners') {
   dpd.users.get({id: self.owner}, function(user) {
        self.owner = user;
    });
}