import { Milestone } from "../entities";

export interface IMilestonesRepository {
  /**
   * Get a specific Milestone using ID
   * @param milestoneId - string - Generated milestone Id
   * @return requested Milestone
   * */
  getMilestoneById(milestoneId): Promise<Milestone>;
  getAllMilestones(): Promise<Milestone[]>;
}
