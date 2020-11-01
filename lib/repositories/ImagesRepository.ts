import { IImagesRepository } from "./IImagesRepository";
import { Image } from "../entities";
import { IMAGES_LIST } from "../constants";

export class ImagesRepository implements IImagesRepository {
  async getAllImages(): Promise<Image[]> {
    return IMAGES_LIST;
  }

  async getImageById(imageId: string): Promise<Image> {
    return IMAGES_LIST[imageId];
  }
}
