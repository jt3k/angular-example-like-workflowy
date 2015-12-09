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
			var treeData = MyFactory.getLinkedList();
			treeData = {
				label: 'root',
				childrens: treeData
			};
			$scope.bTreeDataSet = true; // initially load tree
			$scope.treeData = treeData;
			$scope.btnText = function() {
				return $scope.bTreeDataSet ? "Remove All" : "Set Treedata back";
			}
			$scope.toggleData = function() {
				$scope.treeData = ($scope.bTreeDataSet = !$scope.bTreeDataSet) ? treeData : null;
			}

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