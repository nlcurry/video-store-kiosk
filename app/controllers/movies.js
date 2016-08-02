import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  actions: {
    nextPage: function() {
      if (this.page <10) {
        this.incrementProperty('page'),
        this.set('page')
      }
    },

    previousPage: function() {
      if (this.page <10) {
        this.decrementProperty('page'),
        this.set('page')
      }
    }
  }
});