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
import { DeliveryCreateNestedManyWithoutShippingsInput } from "./DeliveryCreateNestedManyWithoutShippingsInput";

import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsDate,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";

import { Type } from "class-transformer";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { EnumShippingShippingMethod } from "./EnumShippingShippingMethod";

@InputType()
class ShippingCreateInput {
  @ApiProperty({
    required: false,
    type: () => DeliveryCreateNestedManyWithoutShippingsInput,
  })
  @ValidateNested()
  @Type(() => DeliveryCreateNestedManyWithoutShippingsInput)
  @IsOptional()
  @Field(() => DeliveryCreateNestedManyWithoutShippingsInput, {
    nullable: true,
  })
  deliveries?: DeliveryCreateNestedManyWithoutShippingsInput;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

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
  shippingCost?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  shippingDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumShippingShippingMethod,
  })
  @IsEnum(EnumShippingShippingMethod)
  @IsOptional()
  @Field(() => EnumShippingShippingMethod, {
    nullable: true,
  })
  shippingMethod?: "Option1" | null;

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
  trackingNumber?: string | null;
}

export { ShippingCreateInput as ShippingCreateInput };
