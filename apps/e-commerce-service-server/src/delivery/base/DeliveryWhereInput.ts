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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumDeliveryDeliveryStatus } from "./EnumDeliveryDeliveryStatus";
import { StringFilter } from "../../util/StringFilter";
import { ShippingWhereUniqueInput } from "../../shipping/base/ShippingWhereUniqueInput";

@InputType()
class DeliveryWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  deliveryAddress?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deliveryDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryDeliveryStatus,
  })
  @IsEnum(EnumDeliveryDeliveryStatus)
  @IsOptional()
  @Field(() => EnumDeliveryDeliveryStatus, {
    nullable: true,
  })
  deliveryStatus?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ShippingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShippingWhereUniqueInput)
  @IsOptional()
  @Field(() => ShippingWhereUniqueInput, {
    nullable: true,
  })
  shipping?: ShippingWhereUniqueInput;
}

export { DeliveryWhereInput as DeliveryWhereInput };