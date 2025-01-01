import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

const seed = 13
const collectionSize = 1000

interface Song {
  Label: string;
}

@Injectable()
export class AppService {
  private collection = [];

  constructor() {
    faker.seed(seed)
    this.setCollection()
  }

  getData(): Song[] {
    return this.collection;
  }

  private setCollection() {
    for (let i = 0; i < collectionSize; i++) {
      this.collection.push(this.getSong())
    }
  }

  private getSong() {
    const {
      album,
      artist,
      genre,
      songName
    } = faker.music;

    return {
      album: album(),
      artist: artist(),
      genre: genre(),
      songName: songName(),
    }
  }
}
