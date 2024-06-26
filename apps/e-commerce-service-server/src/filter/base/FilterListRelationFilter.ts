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
import { FilterWhereInput } from "./FilterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FilterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FilterWhereInput,
  })
  @ValidateNested()
  @Type(() => FilterWhereInput)
  @IsOptional()
  @Field(() => FilterWhereInput, {
    nullable: true,
  })
  every?: FilterWhereInput;

  @ApiProperty({
    required: false,
    type: () => FilterWhereInput,
  })
  @ValidateNested()
  @Type(() => FilterWhereInput)
  @IsOptional()
  @Field(() => FilterWhereInput, {
    nullable: true,
  })
  some?: FilterWhereInput;

  @ApiProperty({
    required: false,
    type: () => FilterWhereInput,
  })
  @ValidateNested()
  @Type(() => FilterWhereInput)
  @IsOptional()
  @Field(() => FilterWhereInput, {
    nullable: true,
  })
  none?: FilterWhereInput;
}
export { FilterListRelationFilter as FilterListRelationFilter };