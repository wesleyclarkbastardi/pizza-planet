app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
  
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        price: 4.95
      }
    ];
    $scope.mains = [
        {
          name: 'Steak',
          description: 'Prime cut of beef seared and grilled to your liking.',
          price: 27.95
        },
        {
          name: 'Chicken',
          description: 'Delicious and juicy chicken breast served with two sides of the day.',
          price: 19.95
        },
        {
          name: 'Grilled portobello burger',
          description: 'Grilled and season portobello mushroom cap served on a gluten-free bun.',
          price: 18.95
        }
      ];

      $scope.extras = [
        {
          name: "Potato",
          description: "Idaho potatoes served baked, mashed, or fried.",
          price: 5
        },
        {
          name: "Green beans",
          description: "Green beans lightly sauteed in olive oil.",
          price: 5
        },
        {
          name: "Maple carrots",
          description: "Carrots lightly steamed with a maple glaze.",
          price: 5
        }
      ];
  
  }]);