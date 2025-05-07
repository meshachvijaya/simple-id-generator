function randomId() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let result = '';

    // first 4 letters
    for (let i = 0; i < 4; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    // 4 number in the middle
    for (let i = 0; i < 4; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // one last letter
    result += letters.charAt(Math.floor(Math.random() * letters.length));

    return result;
}

function generateId() {
    let ids = JSON.parse(localStorage.getItem('generateIds') || '[]');
    console.log('Existing IDs:', ids);

    function getUniqueId() {
        const newId = randomId();
        console.log('New ID generated:', newId);

        if (ids.includes(newId)) {
            console.log('ID is exist, regenerating ID...');
            // rerun the function if the ID exists
            return getUniqueId();
        } else {
            console.log('Unique ID found:', newId);
            return newId;
        }
    }

    const uniqueId = getUniqueId();
    console.log('Unique ID used:', uniqueId);

    ids.push(uniqueId);
    console.log('New ID after add ID:', ids);

    localStorage.setItem('generateIds', JSON.stringify(ids));
    console.log('LocalStorage updated.');

    document.getElementById('idDisplay').innerText = uniqueId;
}