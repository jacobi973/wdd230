document.getElementById('copyrightyear').textContent = new Date().getFullYear();
document.getElementById('last-updated').textContent = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().toLocaleTimeString()}`;