import { IMilestonesRepository } from "./IMilestonesRepository";
import { Milestone } from "../entities";
import { MILESTONES_LIST } from "../constants/MilestonesList";

export class MilestonesRepository implements IMilestonesRepository {
  async getAllMilestones(): Promise<Milestone[]> {
    return MILESTONES_LIST;
  }
  async getMilestoneById(milestoneId): Promise<Milestone> {
    return MILESTONES_LIST[milestoneId];
  }
}
