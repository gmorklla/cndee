﻿function validaMail(mail) {var email=/^[A-Za-z0-9][\w-.]+@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;return(email.test(mail));}
function acceptNum(evt){var key = nav4 ? evt.which : evt.keyCode;return (key <= 13 || (key >= 48 && key <= 57));}