/**
 * 将html元素字符串，转为网页认识的标签字符串
 * @param {*} content 
 */
export const formatHtmlSymbolToHTMLString = content => {
    return content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/<=/g, '&le;')
        .replace(/>=/g, '&ge;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
        .replace(/\n/g, '<br>')
        .replace(/\r/g, '<br>')
        .replace(/\s/g, '&nbsp;&nbsp;')
}