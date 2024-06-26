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
import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { HelpDeskUpdateManyWithoutUsersInput } from "./HelpDeskUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { RecommendationUpdateManyWithoutUsersInput } from "./RecommendationUpdateManyWithoutUsersInput";
import { EnumUserRole } from "./EnumUserRole";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CartUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CartUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CartUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  carts?: CartUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedbackUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedbackUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FeedbackUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => HelpDeskUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HelpDeskUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HelpDeskUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  helpDesks?: HelpDeskUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => RecommendationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RecommendationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RecommendationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  recommendations?: RecommendationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => UserProfileUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProfileUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProfileUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => WishlistUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WishlistUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WishlistUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  wishlists?: WishlistUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
