import type { EdgeProps } from 'vitedge'

export default <EdgeProps>{
  async handler({ params, href }) {
    // Remove trailing slash
    if (href.endsWith('/')) {
      return {
        status: 301,
        headers: {
          location: href.slice(0, -1)
        }
      }
    }
    // Fetch meta data
    else {
      let place = null
      await fetch(`https://d.meteostat.net/app/place?id=${params?.id}`)
        .then(response => response.json())
        .then(data => {
          place = data.data
        })
        .catch(() => console.log('Place Not Found'))
      return {
        data: {
          status: place === null ? 404 : 200,
          place: place,
        },
      }
    }
  },
  options: {
    cache: {
      api: 60*60*24*14,
      html: 60*60*24*14
    },
  },
}
