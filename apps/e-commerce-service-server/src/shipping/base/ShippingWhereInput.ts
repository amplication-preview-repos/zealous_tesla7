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
import { DeliveryListRelationFilter } from "../../delivery/base/DeliveryListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumShippingShippingMethod } from "./EnumShippingShippingMethod";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class ShippingWhereInput {
  @ApiProperty({
    required: false,
    type: () => DeliveryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliveryListRelationFilter)
  @IsOptional()
  @Field(() => DeliveryListRelationFilter, {
    nullable: true,
  })
  deliveries?: DeliveryListRelationFilter;

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
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  shippingCost?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  shippingDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumShippingShippingMethod,
  })
  @IsEnum(EnumShippingShippingMethod)
  @IsOptional()
  @Field(() => EnumShippingShippingMethod, {
    nullable: true,
  })
  shippingMethod?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  trackingNumber?: StringNullableFilter;
}

export { ShippingWhereInput as ShippingWhereInput };