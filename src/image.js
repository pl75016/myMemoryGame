export default function images(value){
    return (require(`./cards/${value}.png`).default)
}