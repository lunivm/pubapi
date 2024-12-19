import { Injectable } from '@nestjs/common';
import * as dataMock from './users-data.mock.json'

@Injectable()
export class AppService {
  getData(): {}[] {
    return dataMock;
  }
}
