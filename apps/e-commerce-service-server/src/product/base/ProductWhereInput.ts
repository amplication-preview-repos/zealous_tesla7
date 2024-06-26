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
import { FeedbackListRelationFilter } from "../../feedback/base/FeedbackListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../../recommendation/base/RecommendationListRelationFilter";

@InputType()
class ProductWhereInput {
  @ApiProperty({
    required: false,
    type: () => FeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeedbackListRelationFilter)
  @IsOptional()
  @Field(() => FeedbackListRelationFilter, {
    nullable: true,
  })
  feedbacks?: FeedbackListRelationFilter;

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
    type: () => RecommendationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecommendationListRelationFilter)
  @IsOptional()
  @Field(() => RecommendationListRelationFilter, {
    nullable: true,
  })
  recommendations?: RecommendationListRelationFilter;
}

export { ProductWhereInput as ProductWhereInput };
