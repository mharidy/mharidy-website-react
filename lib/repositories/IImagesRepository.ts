import { Image } from "../entities";

export interface IImagesRepository {
  /**
   * Get a specific Image using ID
   * @param imageId - string - Generated image Id
   * @return requested Image
   * */
  getImageById(imageId: string): Promise<Image>;

  /**
   * Get all images
   * @return - array<Image> images list
   * */
  getAllImages(): Promise<Image[]>;
}
