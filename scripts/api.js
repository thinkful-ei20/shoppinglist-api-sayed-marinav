'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sayedmarina';
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, success, error) {
    const newItem = JSON.stringify({name,});

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success,
      error,
    });
  };
  const updateItem = function (id, updateData, success, error) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success,
      error,
    });
  };

  const deleteItem = function(id, success, error) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      // contentType: 'application/json',
      // data: JSON.stringify(updateData),
      success,
      error,
    });
  };

  return {
    getItems, 
    createItem,
    updateItem,
    deleteItem,
  };
}());