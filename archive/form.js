document.getElementById('dateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        location: document.getElementById('location').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        cuisine: document.getElementById('cuisine').value,
        cafe: document.getElementById('cafe').value,
        description: document.getElementById('description').value
    };
    console.log('Date Entry:', data);
});