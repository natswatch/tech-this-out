async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
        alert('You are now logged out!');
    } else {
        alert(response.statusText);
    }
}

// logs out of the page after 5 minutes
setInterval(logout, 300000);

document.querySelector('#logout').addEventListener('click',logout);
