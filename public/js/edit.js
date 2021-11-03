const delButtonHandler = async (event) => {
    event.preventDefault();
    const post_id = document.querySelector('#edit-post-id').value;

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
};

const updateButtonHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#edit-post-id').value;
    const title = document.querySelector('#edited-title').value.trim();
    const body = document.querySelector('#edited-body').value.trim();

    if (title && body) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({title, body}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
}



document
    .querySelector('#delete-post-form')
    .addEventListener('click', delButtonHandler);

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', updateButtonHandler);