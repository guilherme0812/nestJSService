import { User } from "src/modules/user/entities/user.entity"

export class CreatePhotoDto {
  url: string
  user: User
}
