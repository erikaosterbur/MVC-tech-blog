const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
      
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });
      
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'UPDATE',
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
    .querySelector('#update-post-form')
    .addEventListener('click', updateButtonHandler);