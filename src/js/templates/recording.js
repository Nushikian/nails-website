export function cardTemplateHTML({image, duration, coast, type, id}) {
    return `
    <div class="service" data-type="${type}" data-duration="${duration}" data-coast="${coast}" data-id="${id}">
        <img src="${image}" height="170px" width="250px">
        <div class="content">
            <h3>${type}</h3>
            <hr>
            <p>${duration += duration < 60 ? ' хвилин' : ' годин'}</p>
            <p>${coast} грн</p>
            <a href="">Записатися</a>
        </div>
    </div>
    `
}

export function telegramMessageHTML({type, name, telephone, wishes, recordDate}) {
    return `
<b>ЗАПИСЬ НА ${type}</b>
Услуга: <b>${type}</b>
Имя: ${name}
Время: ${recordDate}
Телефон: <a href="tel:${telephone}">${telephone}</a>
Пожелания: ${wishes},
    `;
}