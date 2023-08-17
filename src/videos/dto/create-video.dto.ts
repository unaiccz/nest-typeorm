/*
objeto para darle forma a ***
decoradores para validar => *@isemail*
*/
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class CreateVideoDto {
    //  decorador para que en la ui de swagger aparezca el objeto
    @ApiProperty()
id:     number;
@ApiProperty()

titulo: string;
@ApiProperty()

descripcion: string;
@ApiProperty()

url: string;
@ApiProperty()

imagen: string;


}
