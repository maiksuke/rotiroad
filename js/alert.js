// Allikas Artur ja StackOverflow

// Ootab kuni alertNupp on vajutatud, seejarel naitab alerti ning peale OK vajutamist varskendab lehe
document.addEventListener('DOMContentLoaded', function() {
    const alertNupp = document.getElementById('alertNupp');

    alertNupp.addEventListener('click', function() {
    alert('Retsept saadetud!');
    location.reload();
        });
});
