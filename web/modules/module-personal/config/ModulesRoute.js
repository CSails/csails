/**
 * Created by chao on 2017/6/9.
 */
modulePersonal.config(function ($stateProvider) {
    $stateProvider
        .state('csails.personal', {
            cache: false,
            url: '/personal',
            views:{
                'csails-main':{
                    templateUrl: 'templates/personal.html',
                    controller: 'PersonalController'
                }
            }

        })
        .state('csails.register', {
            cache: false,
            url: '/register',
            views:{
                'csails-main':{
                    templateUrl: 'templates/register.html',
                    controller: 'PersonalController'
                }
            }

        })

});