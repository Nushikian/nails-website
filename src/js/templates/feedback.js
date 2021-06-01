export function feedbackTemplateHTML(description, name) {
    return `
        <div class="feedback">
            <p >${description}</p>
            <p class="text2">${name}</p>
        </div>
    `
}

export function telegramMessageHTML({name, service, feedback}) {
    return `
<b>ОТЗЫВ ОТ ПОЛЬЗОВАТЛЕЯ  ${name}</b>,
Услуга: ${service}
Отзыв: ${feedback},
    `;
}