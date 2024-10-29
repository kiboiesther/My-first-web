window.fbAsyncInit = function() {
    FB.init({
        appId      : '909554414450616',
        cookie     : true,
        xfbml      : true,
        version    : 'v21.0'
    });
};
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.api('/me?fields=id,name,email', function(user) {
                console.log(user);
            });
        }
    });
}
