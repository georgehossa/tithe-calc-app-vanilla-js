export class Bible {
  constructor(day) {
    this.day = day;
  }

  async getVerse() {
    const URL = `https://developers.youversionapi.com/1.0/verse_of_the_day/${
      this.day
    }?version_id=12`;
    const headers = {
      headers: {
        'X-YouVersion-Developer-Token': process.env.API_KEY,
        'Accept-Language': 'en',
        Accept: 'application/json',
      },
    };
    const response = await fetch(URL, headers);
    const data = response.json();
    return data;
  }
}
