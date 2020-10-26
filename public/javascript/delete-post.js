// function that delete's a post by it's ID and redirects user to their dashboard
async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('#delete-post-btn').addEventListener('click', deleteFormHandler);