angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('dapa', {
      // abstract: true,
      template: '<ui-view></ui-view>',
      controller: 'dapaCtrl as dapa'
    })

    .state('dapa.welcome', {
      url: '/',
      templateUrl: 'templates/welcome.html'
    })

    .state('dapa.login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
        
    .state('dapa.register', {
      url: '/register',
      templateUrl: 'templates/register.html'
    })

    .state('dapa.forms', {
      url: '/forms',
      templateUrl: 'templates/forms.html'
    })

    .state('dapa.editForms', {
      url: '/edit-forms',
      templateUrl: 'templates/edit-forms.html'
    })

    .state('dapa.form', {
      /* :formId is the form.timestamp, ?section is the section of the form */
      url: '/forms/:formId?section',
      templateUrl: 'templates/form.html',
      onEnter: function (Api, $stateParams) {
        /* Loop through forms to match params with form.timestamp to view sync api.currentForm */
        angular.forEach(Api.forms, function (form) {
          form.timestamp.toString() === $stateParams.formId ? Api.currentForm = form : null;
        });
      }
    })



    .state('dapa.recover', {
      url: '/recover',
      templateUrl: 'templates/recover.html'
    })

    .state('dapa.profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html'
    })

    .state('dapa.editProfile', {
      url: '/edit-profile',
      templateUrl: 'templates/edit-profile.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});