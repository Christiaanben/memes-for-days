export default class Meme {
  image: string
  title: string
  description: string

  constructor ({
                 image = '',
                 title = '',
                 description = '',
               } = {}) {
    this.image = image
    this.title = title
    this.description = description
  }

}