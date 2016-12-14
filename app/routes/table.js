import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
        var items = [];
        for (var i = 0; i < 10000; i++) {
            items.push({name: "Item " + i});
        }
        return items;
    }
});
