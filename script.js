const handleCalendarSubmit = () => {
    const calendar = document.getElementById('calendar');
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const total = document.getElementById('total');

    total.innerText = `Получили первую дату "${from.value}" и вторую дату "${to.value}"`;
    calendar.reset();
}