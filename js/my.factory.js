angular.module('app')
	.factory('MyFactory', function() {
		'use strict';
		var service = {};
		var list = {
			1: {
				id: 1,
				parent: 2,
				label: 'one'
			},
			2: {
				id: 2,
				parent: 0,
				label: 'two'
			},
			3: {
				id: 3,
				parent: 2,
				label: 'three'
			},
			4: {
				id: 4,
				parent: 0,
				label: 'four'
			},
			5: {
				id: 5,
				parent: 4,
				label: 'five'
			}
		};

		service.getLinkedList = function() {
			list = JSON.parse(JSON.stringify(list));
			var linkedList = [];
			for (var i in list) {
				var item = list[i];
				var parentId = item.parent;
				var parentObj = list[parentId];
				// debugger;

				if (parentId) {
					if (parentObj.childrens === undefined) {
						parentObj.childrens = [];
					}

					parentObj.childrens.push(item);
				} else {
					console.log('i am parent!');
					linkedList.push(item);
				}
			}

			for (var i in list) {
				var item = list[i];
				var parent = item.parent

				if (parent) {
					delete list[i];
				}
			}

			return linkedList;
		};

		service.getList = function() {
			return list;
		};

		service.setListItem = function(label, parent) {
			var id = _.uniqueId('new_');

			list[id] = {
				id: id,
				label: label,
				parent: parent || 0
			};
		}

		return service;
	});