export class Bible {
  constructor(day) {
    this.day = day;
  }

  async getVerse() {
    const URL = `https://developers.youversionapi.com/1.0/verse_of_the_day/${
      this.day
    }?version_id=1`;
    const headers = {
      method: 'GET',
      headers: {
        'X-YouVersion-Developer-Token': 'ChY3zDzH34aBkd42GfDl7i4rdXo',
        'Accept-Language': 'en',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
    };
    const response = await fetch(URL, headers);
    const data = response.json();
    return data;
  }
}
