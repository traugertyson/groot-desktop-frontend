/** ApplicationController
    Responsible for application level activites
    - navigation
    - header and footer
    DO NOT PUT ANY CONTENT CONTROLLING CODE HERE
**/
app.controller('NavCtrl', function ($scope) {
    $scope.nav = [
        {name: 'About', path: '#/about'},
        {name: 'SIGs', path: '#/sigs'},
        {name: 'Events', path: '#/events'},
        {name: 'Reflections|Projections', path: '#/conference'},
        {name: 'Sponsors',path: '#/sponsors'},
        {name: 'Resume_Book',path: '#/sponsors/resume_book'},
        {name: 'Join', path: '#/join'}
    ];
});
