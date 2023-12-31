export const checkImageUrl = (url) => {
    if(!url) return false
    const pattern = new RegExp('^(https?:\\/\\/.+\\.(png|jpg|jpeg|gif|webp))$', 'i')
    return pattern.test(url)
}
