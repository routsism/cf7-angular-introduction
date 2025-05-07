import { MatSlideToggleRequiredValidator } from "@angular/material/slide-toggle"

export interface User {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  address: {
    area: string;
    road: string;
  }
}
