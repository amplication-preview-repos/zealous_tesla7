/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";

import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class RefundCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => PaymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentWhereUniqueInput, {
    nullable: true,
  })
  payment?: PaymentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reason?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  refundDate?: Date | null;
}

export { RefundCreateInput as RefundCreateInput };
