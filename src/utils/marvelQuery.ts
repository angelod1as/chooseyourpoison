import axios from 'axios'
// import md5 from 'blueimp-md5'

const marvelQuery = async (character: string) => {
  const url = 'http://gateway.marvel.com/v1/public/characters'

  console.log(character)

  try {
    const response = await axios.get(url)
    return response
  } catch (error) {
    return error
  }
}

export default marvelQuery
