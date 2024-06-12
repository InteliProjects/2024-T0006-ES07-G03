import { File } from "buffer";
import { IsNotEmpty, IsString } from "class-validator";

export class PayloadDto {
    @IsNotEmpty()
    file: File;

    @IsNotEmpty()
    @IsString()
    userId: string;
}