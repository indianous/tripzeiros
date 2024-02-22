import { Comment } from "../entities/comment";

export class CommentRepository {
  constructor() {}

  async create(comment: Comment): Promise<Comment> {
    return comment;
  }
}
