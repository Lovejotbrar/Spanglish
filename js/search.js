document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});


async function search() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const elements = document.body.getElementsByTagName('*');
    let found = false;

    for (const element of elements) {
        if (element.children.length === 0 && element.innerText.toLowerCase().includes(query)) {
            const scrollToElement = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2);
            window.scrollTo({ top: scrollToElement, behavior: 'smooth' });
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById('searchInput').placeholder = 'Not Found';
        document.getElementById('searchInput').style.color = 'red';
    } else {
        document.getElementById('searchInput').placeholder = 'Search...';
        document.getElementById('searchInput').style.color = 'black';
    }
}

document.getElementById('searchInput2').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search2();
    }
});



async function search2() {
    const query = document.getElementById('searchInput2').value.trim().toLowerCase();
    const elements = document.body.getElementsByTagName('*');
    let found = false;

    for (const element of elements) {
        if (element.children.length === 0 && element.innerText.toLowerCase().includes(query)) {
            const scrollToElement = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2);
            window.scrollTo({ top: scrollToElement, behavior: 'smooth' });
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById('searchInput2').placeholder = 'Not Found';
        document.getElementById('searchInput2').style.color = 'red';
    } else {
        document.getElementById('searchInput2').placeholder = 'Search...';
        document.getElementById('searchInput2,').style.color = 'black';
    }
}
