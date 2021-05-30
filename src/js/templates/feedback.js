export function feedbackTemplateHTML(description, name) {
    return `
        <div class="feedback">
            <p >${description}</p>
            <p class="text2">${name}</p>
        </div>
    `
}