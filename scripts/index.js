'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  // api.getItems((items) => {
  //   items.forEach((item) => store.addItem(item));
  //   const item = store.items[1];
  //   console.log('current name: ' + item.name);
  //   store.findAndUpdate(item.id, { name: 'foobar' });
  //   console.log('new name: ' + item.name);
  //   shoppingList.render();
  // });
});
