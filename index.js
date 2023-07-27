let a;
    let time;
    let date;

    setInterval(() => {
        a = new Date();
        time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
        document.getElementById('time').innerHTML = time;
        date = a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear();
        document.getElementById('date').innerHTML = date;
    }, 1000);