module.exports = function () {
    return {
        restrict: "A",
        scope: {
            image: "="
        },
        link: function (scope, element, attrs) {

            scope.image = { url: "../../../../assets/img/avatar.jpg" };
            scope.image.progress = 0;

            element.bind("change", function () {

                let reader = new FileReader();

                function updateProgress(evt) {

                    if (evt.lengthComputable) {
                        var percentLoaded = Math.round((evt.loaded / evt.total) * 100);

                        if (percentLoaded <= 100) {
                            scope.image.progress = percentLoaded;
                        }
                    }
                }

                reader.onprogress = updateProgress;

                reader.onload = function (e) {
                    /* $apply - Hey, alterei algo! Se vire para descobrir o que foi*/
                    scope.$apply(function () {
                        scope.image.url = e.target.result;
                    });
                }

                if (this.files[0])
                    reader.readAsDataURL(this.files[0]);

            });

            scope.image.destroy = function () {
                console.log("clickou");
                scope.image = { url: "../../../../assets/img/avatar.jpg" };
            }
            
        }
    }
}