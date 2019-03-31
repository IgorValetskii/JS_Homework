var body = document.body;
    button = document.getElementsByTagName('button')[0];


button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.onload = function () {

        var user = JSON.parse(this.response).data;

        for (var i = 0 ; i < user.length; i++) {
            var users = 'User ' + [i + 1];

            body.innerHTML += '<a href="' + '#' + i + '">' + users + '</a><div id="' + i + '"></div>';

            var divInfo = document.getElementsByTagName('div')[i];

            divInfo.innerHTML = '<img src="'+ user[i].avatar + ' " >' + '<p>' + 'First Name:' + user[i].first_name + '</p>' + '<p>' + 'Last Name:' + user[i].last_name + '</p>' ;
        }

        var link = document.getElementsByTagName('a')[0];

        link.classList.add('show');
    };

    xhr.onerror = function () {
        body.innerHTML += '<div id="myModal" class="modal">\n' +
            '<div class="modal-content">\n' +
            '<span class="close">&times;</span>\n' +
            '<h1>Ошибка!</h1> <br> <p>Данные не были получены.</p>\n' +
            '</div>\n' +
            '</div>';

        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }
    };

    xhr.onloadend = function () {
        console.log('Запрос завершен');
    };

    xhr.send();

}, false);

body.onclick = function (event) {
    var target = event.target;

    if (target.tagName !== "BUTTON"
        && target.tagName !== "DIV"
        && target.tagName !== "P"
        && target.tagName !== "IMG") {

        var a = document.getElementsByTagName("a");

        for (var i = 0; i < a.length; i++) {
            a[i].classList.remove('show');
        }

        target.classList.add('show');
    }
};




