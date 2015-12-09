(function() {
	angular
		.module('app')
		// .run(function() {
		// 	$(document.body).on('keydown', 'div[contenteditable=true]', function(e) {
		// 		// trap the return key being pressed
		// 		if (e.keyCode == 13) {
		// 			// insert 2 br tags (if only one br tag is inserted the cursor won't go to the second line)
		// 			document.execCommand('insertHTML', false, "");
		// 			// prevent the default behaviour of return key pressed
		// 			return false;
		// 		}
		// 	});
		// })

		.controller('appCtrl', function appCtrl($scope, MyFactory) {
			var treeData = {
				label: 'root',
				childrens: MyFactory.getLinkedList()
			};

			$scope.treeData = treeData;

			// $scope.keydown = function(e) {
			// 	console.log('e', e);
			// 	if (e.keyIdentifier === "Enter") {
			// 		document.execCommand('insertHTML', true, '');
			// 	}
			// 	console.log('e', this);
			// }

			console.log($scope);

		});

}());