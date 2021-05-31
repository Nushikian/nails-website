export function telegramMessageHTML({name = '', message = '', address = '', telephone = '', email = '', topic}) {
    return `
    Пользователь с именем ${name} хочет что б ему перезвонили,
    Тема: <b>${topic}</b>
    Почта: <a href="mailto:${email}">${email}</a>
    Телефон: <a href="tel:${telephone}">${telephone}</a>
    Адрес: ${address},
    Сообщение: ${message},
    `
}