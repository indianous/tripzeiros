import { v4 } from "uuid";

export class Service {
  readonly id: string;
  readonly content: string | null = null;
  constructor(props?: { content: string }, id?: string) {
    if (id) {
      this.id = this.validateId(id);
    } else {
      this.id = v4();
    }
    if (props) this.content = this.validateContent(props.content);
  }
  validateContent(content: string): string {
    return content;
  }

  private validateId(id: string): string {
    if (id === "") {
      throw new Error("This id is empty");
    }
    return id;
  }
}
