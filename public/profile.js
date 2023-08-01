const username = localStorage.getItem('username') || 'user';

const title = document.querySelector('h2');
title.textContent = `Welcome back, ${username}`