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
import { CartListRelationFilter } from "../../cart/base/CartListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../../feedback/base/FeedbackListRelationFilter";
import { HelpDeskListRelationFilter } from "../../helpDesk/base/HelpDeskListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { RecommendationListRelationFilter } from "../../recommendation/base/RecommendationListRelationFilter";
import { EnumUserRole } from "./EnumUserRole";
import { UserProfileListRelationFilter } from "../../userProfile/base/UserProfileListRelationFilter";
import { WishlistListRelationFilter } from "../../wishlist/base/WishlistListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CartListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CartListRelationFilter)
  @IsOptional()
  @Field(() => CartListRelationFilter, {
    nullable: true,
  })
  carts?: CartListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => HelpDeskListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HelpDeskListRelationFilter)
  @IsOptional()
  @Field(() => HelpDeskListRelationFilter, {
    nullable: true,
  })
  helpDesks?: HelpDeskListRelationFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  orders?: OrderListRelationFilter;

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

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserProfileListRelationFilter)
  @IsOptional()
  @Field(() => UserProfileListRelationFilter, {
    nullable: true,
  })
  userProfiles?: UserProfileListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WishlistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WishlistListRelationFilter)
  @IsOptional()
  @Field(() => WishlistListRelationFilter, {
    nullable: true,
  })
  wishlists?: WishlistListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
